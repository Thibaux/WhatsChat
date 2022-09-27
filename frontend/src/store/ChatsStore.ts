import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { useMessagesStore } from './MessagesStore';
import { getChats, createChat } from '../services/ChatService';

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
    handleCreateChat: ({
        userId,
        chatTitle,
    }: {
        userId: string;
        chatTitle: string;
    }) => Promise<ApiResponseType>;
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
                friendsUsername: '',
            },
        ],
        setRenderChat: async ({ showChat, chatId, chatTitle }) => {
            useMessagesStore.getState().getMessages(chatId);

            set(
                produce((draft) => {
                    draft.currentChat = { chatId, chatTitle };
                })
            );
            set(
                produce((draft) => {
                    draft.renderChat = showChat;
                })
            );
        },
        getChats: async () => {
            const chats = await getChats();

            set(
                produce((draft) => {
                    draft.chats = chats;
                })
            );
        },
        handleCreateChat: async ({ userId, chatTitle }) => {
            const result = await createChat({ userId, chatTitle });

            if (result.status === 'SUCCESS') {
                set(
                    produce((draft) => {
                        draft.chats.push(result.data);
                    })
                );
            }
            return result;
        },
    }))
);
