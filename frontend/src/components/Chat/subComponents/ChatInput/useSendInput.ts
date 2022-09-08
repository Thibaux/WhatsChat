import { ChangeEventHandler, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useChatStore } from '../../../../store/store';

const serverPort = 'http://localhost:8080';

const socket = io(serverPort, {
    withCredentials: false,
});

export const useSendInput = () => {
    const { chatMessages, sendMessage } = useChatStore();
    const [messageValue, setMessageValue] = useState('');

    const handleSend = () => {
        socket.emit('sendMessage', messageValue, () => setMessageValue(''));
    };

    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;

        setMessageValue(text);
    };

    const getIdOfLastMessage = (): number => {
        if (!chatMessages) return 0;
        return chatMessages[chatMessages.length].id;
    };

    useEffect(() => {
        socket.on('message', (message) => {
            console.log(message.message);
            sendMessage({
                id: getIdOfLastMessage(),
                sender: 'jan',
                message: message.message,
            });
        });
    });

    return {
        messageValue,
        handleSend,
        handleTextChange,
    };
};
