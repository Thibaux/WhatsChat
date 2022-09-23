import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';

export const useChatsOverview = () => {
    const { chats, getChats, setRenderChat } = useChatsStore();

    const handleClickToChat = (chatId: string) => {
        setRenderChat({ showChat: true, chatId });
    };

    useEffect(() => {
        getChats();
    }, []);

    return { chats, handleClickToChat };
};
