import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { useChatsStore } from './ChatsStore';
import {
    getMessagesOfChat,
    sendMessageToApi,
} from '../services/MessagesService';
import { convertApiMessagesToLocalMessages } from '../utils/Converting';

type MessagesStore = {
    messages: Message[];
    localMessages: LocalMessages[];
    getMessages: (chatId: string) => void;
    updateLocalMessages: ({
        userId,
        username,
        message,
    }: {
        userId?: string;
        username?: string;
        message: string;
    }) => void;
    sendMessage: (message: string) => void;
};

export const useMessagesStore = create<MessagesStore>()(
    devtools((set) => ({
        messages: [
            {
                _id: '',
                sender: {
                    _id: '',
                    username: '',
                    email: '',
                    picture: '',
                },
                content: '',
                chat: {
                    _id: '',
                    chatTitle: '',
                    users: [''],
                    createdAt: '',
                    updatedAt: '',
                    __v: 0,
                },
            },
        ],
        localMessages: [
            {
                userId: '',
                username: '',
                message: '',
            },
        ],
        getMessages: async (chatId: string) => {
            const result = await getMessagesOfChat(chatId);

            set(
                produce((draft) => {
                    draft.localMessages =
                        convertApiMessagesToLocalMessages(result);
                })
            );
        },
        updateLocalMessages: ({ userId, username, message }) => {
            set(
                produce((draft) => {
                    draft.localMessages.push({
                        userId,
                        username,
                        message,
                    });
                })
            );
        },
        sendMessage: async (message: string) => {
            await sendMessageToApi(
                message,
                useChatsStore.getState().currentChat.chatId
            );
        },
    }))
);
