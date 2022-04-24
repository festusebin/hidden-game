import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import openSocket from 'socket.io-client';
import dotenv from 'dotenv';
import { GameRoom } from '../components/GameRoom/GameRoom';
import Modal from '../components/Modal/Modal';
import s from '../Styles/Game.module.scss';

dotenv.config();

const { REACT_APP_SERVER_URL: serverUrl } = process.env;

export function Game({ data }) {
  const [messages, setMessages] = useState([]);
  const [info, setInfo] = useState({});
  const [id, setId] = useState(null);
  const [start, setStart] = useState(false);
  const [isModalOpen, toggleModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [action, setAction] = useState('');
  const name = data.location.state ? data.location.state.data.name : null;
  const room = data.location.state ? data.location.state.data.room : null;

  useEffect(() => {
    const socket = openSocket(serverUrl);

    // join room
    socket.emit('join', { name, room });

    // get room and users
    socket.on('room-info', (data) => {
      if (data.users.length < 2) {
        setStart(false);
      }
      setInfo(data);
    });

    // set user id
    socket.on('connect', () => {
      setId(socket.id);
    });

    // game starting - all players
    socket.on('starting-game', (data) => {
      setMessages([]);
      setInfo(data);
      setStart(true);
    });

    // message from server - all players
    socket.on('message', (data) => {
      setMessages((msg) => [...msg, data]);
    });

    // action response - all players
    socket.on('action-response', (data) => {
      setInfo(data);
    });

    // CONFIRM action response - player
    socket.on('message-confirm', (msg) => {
      setAction('');
      setModalText(msg);
      toggleModal(true);
    });

    // SPY action selected response - player
    socket.on('message-spy', () => {
      setAction('spy');
    });

    // SPY action response - player
    socket.on('message-spy-on-player', (player) => {
      setAction('');
      const role = player.newRole ? player.newRole : player.role;
      setModalText(`${player.name} is ${role}.`);
      toggleModal(true);
    });

    // SWITCH action selected response - player
    socket.on('message-switch', () => {
      setAction('switch');
    });

    // SWITCH action response - player
    socket.on('message-switch-roles', (selectedPlayers) => {
      setAction('');
      setModalText(
        `You swapped the roles of ${selectedPlayers[0].name} and ${selectedPlayers[1].name}.`
      );
      toggleModal(true);
    });

    // VOTE action response - player
    socket.on('action-player-voted', (player) => {
      setAction('hasVoted');
    });

    // Game end - all players
    socket.on('game-end', (data) => {
      setAction('');
      setMessages([]);

      if (data.tie) {
        setModalText(`The traitor wins! ${data.traitor.name} was the traitor!`);
      } else if (data.traitor.id === data.mostVotedPlayer.id) {
        setModalText(`The agents win! The traitor was ${data.traitor.name}.`);
      } else {
        setModalText(
          `The traitor wins! ${data.mostVotedPlayer.name} was not the traitor,  ${data.traitor.name} was the traitor!`
        );
      }

      toggleModal(true);
      setStart(false);
    });

    return () => socket.disconnect();
  }, [name, room]);

  if (!name || !room) {
    return (
      <Redirect push to={{ pathname: '/'}}
      />
    );
  }

  return (
    <div>
      <GameRoom
        key={id}
        messages={messages}
        info={info}
        id={id}
        start={start}
        playerTurn={info.playerTurn}
        turn={info.turn}
        action={action}
      />
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <p className={s.modal_text}>{modalText}</p>
        <button className={s.modal_button} onClick={() => toggleModal(false)}>
          Confirm
        </button>
      </Modal>
    </div>
  );
}
