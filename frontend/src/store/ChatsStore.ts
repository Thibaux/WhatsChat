import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { getChats } from '../services/ChatService/GetChats';
import { useMessagesStore } from './MessagesStore';

type ChatsStore = {
    renderChat: boolean;
    currentChat: {
        chatId: string;
        chatTitle: string;
    };
    chats: Chat[];
    setRenderChat: ({
        showChat,
        chatId,
        chatTitle,
    }: {
        showChat: boolean;
        chatId: string;
        chatTitle: string;
    }) => void;
    getChats: () => void;
};

export const useChatsStore = create<ChatsStore>()(
    devtools((set) => ({
        renderChat: false,
        currentChat: { chatId: '', chatTitle: '' },
        chats: [
            {
                _id: '',
                chatTitle: '',
                users: [''],
                createdAt: '',
                updatedAt: '',
                __v: 0,
            },
        ],
        setRenderChat: async ({ showChat, chatId, chatTitle }) => {
            useMessagesStore.getState().getMessages(chatId);

            await set(
                produce((draft) => {
                    draft.currentChat = { chatId, chatTitle };
                })
            );
            await set(
                produce((draft) => {
                    draft.renderChat = showChat;
                })
            );
        },
        getChats: async () => {
            const chats = await getChats();

            await set(
                produce((draft) => {
                    draft.chats = chats;
                })
            );
        },
    }))
);
