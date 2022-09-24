import { ChangeEventHandler, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatsStore } from '../../../../store/ChatsStore';
import { DefaultEventsMap } from '@socket.io/component-emitter';

const apiUrl = 'http://localhost:8080';
// const socket = io(serverPort, {
//     withCredentials: false,
// });
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const { sendMessage, updateLocalMessages } = useMessagesStore();
    const { currentChat } = useChatsStore();
    const { userObject } = useUserStore();

    const u = userObject.username;
    const c = currentChat.chatId;

    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;
        setMessageValue(text);
    };
    const handleSend = () => {
        socket.emit('sendMessage', {
            userName: u,
            chatId: c,
            message: messageValue,
        });
        updateLocalMessages(messageValue);
        sendMessage(messageValue);
        setMessageValue('');
    };

    // const handleSend = () => {
    //     socket.emit('sendMessage', messageValue, () => setMessageValue(''));
    // };
    // const getIdOfLastMessage = (): number => {
    //     if (!chatMessages) return 0;
    //     return chatMessages[chatMessages.length].id;
    // };
    // useEffect(() => {
    // socket.on('message', (message) => {
    //     sendMessage({
    //         id: getIdOfLastMessage(),
    //         sender: 'jan',
    //         message: message.message,
    //     });
    // });
    // });

    useEffect(() => {
        socket = io(apiUrl);
        socket.on('connect', () => {
            console.log(' aslkdjf;lsakjdf');
        });
    }, []);

    // useEffect(() => {
    //
    //     socket = io(apiUrl, {
    //         withCredentials: false,
    //     });
    //
    //     socket.emit('join', { u, c }, (e: any) => {
    //         if (e) {
    //             console.log(e);
    //         }
    //     });
    // }, []);
    //
    // useEffect(() => {
    //     socket.on(
    //         'message',
    //         ({ userName: u, chatId: c, message: socketMessage }) => {
    //             console.log(u + c);
    //             updateLocalMessages(socketMessage);
    //         }
    //     );
    // }, []);

    return {
        messageValue,
        handleTextChange,
        handleSend,
    };
};
