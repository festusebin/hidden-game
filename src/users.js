const users = [];

// join user to room
export function userJoin(id, name, room, role = '', playerTurn = 0, turn = 1, inGame = false) {
  const user = {
    id, name, room, role, playerTurn, turn, inGame,
  };
  users.push(user);
  return user;
}

// get current user
export function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

// user leaves
export function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
}

// get room users
export function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

// get room host
export function getRoomHost(room) {
  return users.filter((user) => user.room === room)[0];
}
