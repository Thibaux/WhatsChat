import { ChangeEventHandler, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatsStore } from '../../../../store/ChatsStore';

const apiUrl = 'http://localhost:8080';
// const socket = io(serverPort, {
//     withCredentials: false,
// });
let socket;

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const { sendMessage } = useMessagesStore();
    const { currentChat } = useChatsStore();
    const { userObject } = useUserStore();
    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;
        setMessageValue(text);
    };
    const handleSend = () => {
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
        const u = userObject.username;
        const t = currentChat.chatTitle;

        socket = io(apiUrl, {
            withCredentials: false,
        });

        socket.emit('join', { u, t }, (e: any) => {
            if (e) {
                console.log(e);
            }
        });
    }, [currentChat.chatTitle, userObject.username]);

    return {
        messageValue,
        handleTextChange,
        handleSend,
    };
};
