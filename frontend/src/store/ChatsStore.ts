import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { useMessagesStore } from './MessagesStore';
import { createChat, deleteChat, getChats } from '../services/ChatService';
import { appendFriendsUsernameToChatArray } from '../utils/Converting';
import { useUserStore } from './UserStore';

type ChatsStore = {
    renderChat: boolean;
    currentChat: {
        chatId: string;
        chatTitle: string;
    };
    chats: Chat[];
    statusDeletionChat: {
        status: string;
        message?: string;
    };
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
    handleDeleteChat: () => Promise<ApiResponseType>;
    updateLocalChats: (chatIdToDelete: string) => void;
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
        statusDeletionChat: {
            status: '',
        },
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
                    draft.chats = appendFriendsUsernameToChatArray({
                        chats,
                        userObject: useUserStore.getState().userObject,
                        users: useUserStore.getState().users,
                    });
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
        handleDeleteChat: async () => {
            const chatIdToDelete: string =
                useChatsStore.getState().currentChat.chatId;
            const result = await deleteChat(chatIdToDelete);

            if (result.status === 'SUCCESS') {
                set(
                    produce((draft) => {
                        draft.statusDeletionChat = {
                            status: result.status,
                        };
                    })
                );
                useChatsStore.getState().updateLocalChats(chatIdToDelete);
            } else {
                set(
                    produce((draft) => {
                        draft.statusDeletionChat = {
                            status: result.status,
                            message: result.data.response.data.message,
                        };
                    })
                );
            }
            return result;
        },
        updateLocalChats: (chatIdToDelete) => {
            const { chats } = useChatsStore.getState();

            const updatedChats = chats.filter(
                (chat: Chat) => chat._id !== chatIdToDelete
            );

            set(
                produce((draft) => {
                    draft.chats = updatedChats;
                })
            );
        },
    }))
);
