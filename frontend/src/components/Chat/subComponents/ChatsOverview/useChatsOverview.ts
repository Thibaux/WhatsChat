import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';

export const useChatsOverview = () => {
    const { chats, getChats, setRenderChat, currentChat } = useChatsStore();

    const handleClickToChat = (chatId: string, chatTitle: string) => {
        setRenderChat({ showChat: true, chatId, chatTitle });
    };

    useEffect(() => {
        getChats();
    }, []);

    return { chats, handleClickToChat, currentChat };
};
