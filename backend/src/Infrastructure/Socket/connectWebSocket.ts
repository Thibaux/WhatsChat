import { Server } from 'socket.io';

export const connectWebSocket = (completeServer: any) => {
    const io = new Server(completeServer, {
        cors: {
            origin: ['http://localhost:3000'],
        },
        allowEIO3: true,
    });

    io.on('connect', (socket) => {
        socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        socket.on('joinRoom', ({ username, chatId }) => {
            socket.join(chatId);

            socket.broadcast.to(chatId).emit('message', { text: `${username} has joined the chat!` });
        });

        socket.on('sendMessage', ({ chatId, userId, username, message }) => {
            socket.to(chatId).emit('receive_message', { userId, username, message });
        });

        socket.on('disconnect', () => {
            // io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            console.log(' user disconneccteeedd');
        });
    });
};
