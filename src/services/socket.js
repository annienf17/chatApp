import { io } from "socket.io-client";

let socket;

export function initializeSocket() {
  if (!socket) {
    socket = io("http://localhost:5173"); // Replace with your backend URL
  }
  return socket;
}

export const sendMessage = (message) => {
  if (!socket) initializeSocket();
  socket.emit("sendMessage", message);
};

export const receiveMessages = (callback) => {
  if (!socket) initializeSocket();
  socket.on("receiveMessage", (message) => {
    callback(message);
  });
};

export const joinChat = (username) => {
  if (!socket) initializeSocket();
  socket.emit("joinChat", username);
};

export const leaveChat = (username) => {
  if (!socket) initializeSocket();
  socket.emit("leaveChat", username);
};

export const onUserListUpdate = (callback) => {
  if (!socket) initializeSocket();
  socket.on("userListUpdate", (users) => {
    callback(users);
  });
};

export const disconnect = () => {
  if (socket) {
    socket.disconnect();
  }
};
