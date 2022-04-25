import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import validator from 'validator';
import {
  userJoin, userLeave, getRoomUsers, getRoomHost, getCurrentUser,
} from './users.js';
import {
  giveRole, increaseTurn, swapRoles, updateRole, castVote, cleanUp, addRoom, removeRoom, findRoom,
} from './game.js';

dotenv.config();

const { PORT: port = 4009 } = process.env;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ msg: 'I am the server for the game Hidden Traitor' });
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Connection
io.on('connection', (socket) => {
  // update player turn and global turn
  function updateTurn(player) {
    const users = getRoomUsers(player.room).filter((user) => user.inGame);
    const turns = increaseTurn(player.playerTurn, player.turn, users);
    const { playerTurn, turn } = turns;
    io.to(player.room).emit('action-response', {
      player,
      room: player.room,
      users,
      host: getRoomHost(player.room),
      playerTurn,
      turn,
    });
  }

  // check if game over
  function checkGameEnd(player, users) {
    let over = true;
    users.forEach((user) => {
      if (!user.hasVoted) {
        over = false;
      }
    });
    if (over) {
      let traitor;
      let mostVotes = 0;
      let mostVotedPlayer;
      let tie = false;
      users.forEach((user) => {
        if (user.newRole) updateRole(user.id);
        if (user.role === 'Traitor') {
          traitor = user;
        }
        if (user.votes && user.votes === mostVotes) {
          tie = true;
        }
        if (user.votes && user.votes > mostVotes) {
          mostVotes = user.votes;
          mostVotedPlayer = user;
        }
      });
      cleanUp(users);
      io.to(player.room).emit('game-end', { traitor, mostVotedPlayer, tie });
    }
  }

  // creating a room
  socket.on('form-create', ({ name, room }) => {
    const trimmedName = name.replace(/\s+/g, '');
    const trimmedRoom = room.replace(/\s+/g, '');

    if (validator.isEmpty(trimmedName) || !validator.isLength(trimmedName, { min: 1, max: 8 })) {
      io.to(socket.id).emit('form-create-fail', { trimmedName, trimmedRoom });
    } else {
      addRoom(trimmedRoom);
      io.to(socket.id).emit('form-create-success', { trimmedName, trimmedRoom });
    }
  });

  // joining a room
  socket.on('form-join', ({ name, room }) => {
    const trimmedName = name.replace(/\s+/g, '');
    const trimmedRoom = room.replace(/\s+/g, '');

    const users = getRoomUsers(room);
    let nameTaken = false;
    if (users) {
      users.forEach((user) => {
        if (user.name.toLowerCase() === trimmedName.toLowerCase()) {
          nameTaken = true;
          io.to(socket.id).emit('form-join-fail', { trimmedName, trimmedRoom, msg: 'Name taken!' });
        }
      });
    }

    if (!nameTaken) {
      if (validator.isEmpty(trimmedName) || !validator.isLength(trimmedName, { min: 1, max: 8 })) {
        io.to(socket.id).emit('form-join-fail', { trimmedName, trimmedRoom, msg: 'Name must be between 1 and 8 characters.' });
      } else if (!findRoom(room)) {
        io.to(socket.id).emit('form-join-fail', { trimmedName, trimmedRoom, msg: 'Game not found!' });
      } else {
        io.to(socket.id).emit('form-join-success', { trimmedName, trimmedRoom });
      }
    }
  });

  // runs after a client joins
  socket.on('join', ({ name, room }) => {
    const user = userJoin(socket.id, name, room);

    socket.join(user.room);

    // send user and room info
    io.to(user.room).emit('room-info', { room: user.room, users: getRoomUsers(user.room), host: getRoomHost(user.room) });
  });

  // runs when a client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      const users = getRoomUsers(user.room);

      io.to(user.room).emit('message', `${user.name} left the game.`);

      if (users.length <= 0) {
        removeRoom(user.room);
      }

      // send user and room info
      io.to(user.room).emit('room-info', { room: user.room, users, host: getRoomHost(user.room) });
    }
  });

  // start game
  socket.on('start-game', (player) => {
    const users = getRoomUsers(player.room);
    giveRole(users);
    io.to(player.room).emit('starting-game', {
      room: player.room, users, host: getRoomHost(player.room), playerTurn: 0, turn: 1,
    });
  });

  // spy action
  socket.on('action-spy', (player) => {
    io.to(player.id).emit('message-spy');
  });

  socket.on('action-spy-on-player', (data) => {
    const player = getCurrentUser(data.id);
    const role = data.user.newRole ? data.user.newRole : data.user.role;
    updateTurn(player);

    io.to(player.room).emit('message', `${player.name} played spy action.`);
    io.to(player.id).emit('message', `${data.user.name} is ${role}.`);
    io.to(data.id).emit('message-spy-on-player', data.user);
  });

  // switch action
  socket.on('action-switch', (player) => {
    io.to(player.id).emit('message-switch');
  });

  socket.on('action-switch-roles', (data) => {
    swapRoles(data.selectedPlayers[0].id, data.selectedPlayers[1].id);
    let player = getCurrentUser(data.id);
    if (player.newRole) {
      player = updateRole(player.id);
    }
    updateTurn(player);

    io.to(player.room).emit('message', `${player.name} played switch action.`);
    io.to(player.id).emit('message', `You swapped the roles of ${data.selectedPlayers[0].name} and ${data.selectedPlayers[1].name}.`);
    io.to(data.id).emit('message-switch-roles', data.selectedPlayers);
  });

  // confirm action
  socket.on('action-confirm', (currentPlayer) => {
    let player = currentPlayer;
    if (player.newRole) {
      player = updateRole(player.id);
    }

    updateTurn(player);

    io.to(player.id).emit('message', `Your role is ${player.role}.`);
    io.to(player.id).emit('message-confirm', `Your role is ${player.role}.`);
    io.to(player.room).emit('message', `${player.name} played confirm action.`);
  });

  // voting
  socket.on('action-vote', (data) => {
    const players = castVote(data.id, data.user.id);
    const player = players[0];
    const votedPlayer = players[1];

    io.to(player.room).emit('message', `${player.name} has voted.`);
    io.to(player.id).emit('message', `You voted for ${votedPlayer.name}.`);
    io.to(data.id).emit('action-player-voted', votedPlayer);

    const users = getRoomUsers(player.room);
    checkGameEnd(player, users);
  });
});

server.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
