import { ChangeEventHandler, useState } from 'react';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatsStore } from '../../../../store/ChatsStore';
import { SOCKET } from '../../../../utils/Constants';

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const [emojiPickerModalIsOpen, setEmojiPickerModalIsOpen] = useState(false);
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

    const handleEmojiPickerClick = () => {
        console.log('sdf');
        setEmojiPickerModalIsOpen(true);
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

    return {
        messageValue,
        handleTextChange,
        handleSend,
        handleEmojiPickerClick,
        emojiPickerModalIsOpen,
    };
};
