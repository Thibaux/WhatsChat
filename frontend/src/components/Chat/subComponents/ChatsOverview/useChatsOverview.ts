import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';

export const useChatsOverview = () => {
    const { chats, getChats, setRenderChat, currentChat } = useChatsStore();
    const { getAllUsers } = useUserStore();

    const handleClickToChat = (chatId: string, chatTitle: string) => {
        setRenderChat({ showChat: true, chatId, chatTitle });
    };

    useEffect(() => {
        getAllUsers();
        getChats();
    }, []);

    return { chats, handleClickToChat, currentChat };
};
