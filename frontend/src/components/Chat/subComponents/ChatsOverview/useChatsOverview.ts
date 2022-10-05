import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';
import { SOCKET } from '../../../../utils/Constants';

export const useChatsOverview = () => {
    const { chats, getChats, setRenderChat, currentChat } = useChatsStore();
    const { userObject, getAllUsers } = useUserStore();

    const handleClickToChat = (chatId: string, chatTitle: string) => {
        setRenderChat({ showChat: true, chatId, chatTitle });

        SOCKET.emit('join_room', { username: userObject.username, chatId });
    };

    useEffect(() => {
        getAllUsers();
        getChats();
    }, []);

    return { chats, handleClickToChat, currentChat };
};
