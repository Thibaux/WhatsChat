import { ChangeEventHandler, useEffect, useState } from 'react';
import { useMessagesStore } from '../../../../store/MessagesStore';

// const serverPort = 'http://localhost:8080';
// const socket = io(serverPort, {
//     withCredentials: false,
// });

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const { sendMessage } = useMessagesStore();

    const handleSend = () => {
        sendMessage(messageValue);
        setMessageValue('');
    };

    // const handleSend = () => {
    //     socket.emit('sendMessage', messageValue, () => setMessageValue(''));
    // };

    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;

        setMessageValue(text);
    };

    // const getIdOfLastMessage = (): number => {
    //     if (!chatMessages) return 0;
    //     return chatMessages[chatMessages.length].id;
    // };

    useEffect(() => {
        // socket.on('message', (message) => {
        //     sendMessage({
        //         id: getIdOfLastMessage(),
        //         sender: 'jan',
        //         message: message.message,
        //     });
        // });
    });

    return {
        messageValue,
        handleTextChange,
        handleSend,
    };
};
