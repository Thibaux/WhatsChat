import io from 'socket.io-client';

const serverPort = process.env.SERVER_PORT;

const socket = io(serverPort, {
  withCredentials: false,
});

export const postMessage = (payload: ChatMessage) => {
  console.log(payload);
  socket.on('message', (socketMessage) => {
    setMessages((prevMessages) => [...prevMessages, socketMessage]);
  });
};
