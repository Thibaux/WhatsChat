import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';

export const useChatsOverview = () => {
    const { chats, getChats } = useChatsStore();

    useEffect(() => {
        getChats();
    }, []);

    return { chats };
};
