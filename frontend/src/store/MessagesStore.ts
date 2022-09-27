import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { useChatsStore } from './ChatsStore';
import {
    getMessagesOfChat,
    sendMessageToApi,
} from '../services/MessagesService';

type MessagesStore = {
    messages: Message[];
    getMessages: (chatId: string) => void;
    updateLocalMessages: (message: string) => void;
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
        // OF DIT:
        // messages: [
        //     {
        //         username: '',
        //         content: '',
        //     },
        // ],
        getMessages: async (chatId: string) => {
            const result = await getMessagesOfChat(chatId);

            await set(
                produce((draft) => {
                    draft.messages = result;
                })
            );
        },
        updateLocalMessages: async (message: string) => {
            await set(
                produce((draft) => {
                    draft.messages.push(message);
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
