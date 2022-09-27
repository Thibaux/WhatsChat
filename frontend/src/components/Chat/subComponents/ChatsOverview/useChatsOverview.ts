import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';
import { SOCKET } from '../../../../utils/Constants';

export const useChatsOverview = () => {
    const { chats, getChats, setRenderChat, currentChat } = useChatsStore();
    const { userObject, getAllUsers } = useUserStore();

    const joinRoom = (username: string, chatId: string) => {
        SOCKET.emit('joinRoom', { username, chatId });
    };

    const handleClickToChat = (chatId: string, chatTitle: string) => {
        setRenderChat({ showChat: true, chatId, chatTitle });

        joinRoom(userObject.username, currentChat.chatId);
    };

    useEffect(() => {
        getAllUsers();
        getChats();
    }, []);

    return { chats, handleClickToChat, currentChat };
};
