import { ChangeEventHandler, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { EmojiClickData } from 'emoji-picker-react/src/types/exposedTypes';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatsStore } from '../../../../store/ChatsStore';
import { SOCKET } from '../../../../utils/Constants';

export const useSendInput = () => {
    const [messageValue, setMessageValue] = useState('');
    const { sendMessage, updateLocalMessages } = useMessagesStore();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { currentChat } = useChatsStore();
    const { userObject } = useUserStore();

    const u = userObject.username;
    const userId = userObject._id;
    const { chatId } = currentChat;

    const handleEmojiOpen = () => {
        if (!chatId) return;
        onOpen();
    };

    const handleTextChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const text = event?.target.value;
        setMessageValue(text);
    };

    const addEmojiToMessageInput = (emoji: string) => {
        const newMessageValue = `${messageValue}${emoji}`;
        setMessageValue(newMessageValue);
    };

    const handleEmojiPickerClick = (
        emoji: EmojiClickData,
        event: MouseEvent
    ) => {
        addEmojiToMessageInput(emoji.emoji);
        onClose();
    };

    const handleSend = async () => {
        await SOCKET.emit('send_message', {
            chatId,
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
        isOpen,
        handleEmojiOpen,
        onClose,
        chatId,
    };
};
