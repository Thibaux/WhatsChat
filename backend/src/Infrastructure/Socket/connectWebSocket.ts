import { Server } from 'socket.io';

export const connectWebSocket = (completeServer: any) => {
    const io = new Server(completeServer, {
        cors: {
            origin: ['http://localhost:3000'],
        },
        allowEIO3: true,
    });

    io.on('connect', (socket) => {
        socket.on('join_room', ({ username, chatId }) => {
            socket.join(chatId);

            socket.broadcast.to(chatId).emit('admin_message', { message: `${username} has joined the chat!` });
        });

        socket.on('send_message', ({ chatId, userId, username, message }) => {
            socket.to(chatId).emit('receive_message', { userId, username, message });
        });

        socket.on('disconnect', () => {
            console.log('byee!');
        });
    });
};
