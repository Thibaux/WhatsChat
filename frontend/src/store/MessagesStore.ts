import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { getMessagesOfChat } from '../services/MessagesService/GetMessagesOfChat';
import { sendMessageToApi } from '../services/MessagesService/SendMessageToApi';
import { useChatsStore } from './ChatsStore';

type MessagesStore = {
    messages: Message[];
    getMessages: (chatId: string) => void;
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
        getMessages: async (chatId: string) => {
            const result = await getMessagesOfChat(chatId);

            await set(
                produce((draft) => {
                    draft.messages = result;
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
