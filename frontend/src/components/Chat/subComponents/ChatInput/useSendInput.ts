import { ChangeEventHandler, useState } from 'react';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatsStore } from '../../../../store/ChatsStore';
import { SOCKET } from '../../../../utils/Constants';

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const { sendMessage, updateLocalMessages } = useMessagesStore();
    const { currentChat } = useChatsStore();
    const { userObject } = useUserStore();

    const u = userObject.username;
    const userId = userObject._id;
    const c = currentChat.chatId;

    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;
        setMessageValue(text);
    };
    const handleSend = async () => {
        await SOCKET.emit('send_message', {
            chatId: c,
            userId,
            username: u,
            message: messageValue,
        });
        updateLocalMessages({
            userId,
            username: u,
            message: messageValue,
        });

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
