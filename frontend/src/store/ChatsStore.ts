import create from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';
import { getChats } from '../services/ChatService/GetChats';

type ChatsStore = {
    chats: Chat[];
    getChats: () => void;
};

export const useChatsStore = create<ChatsStore>()(
    persist(
        (set) => ({
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
            getChats: async () => {
                const chats = await getChats();

                await set(
                    produce((draft) => {
                        draft.chats = chats;
                    })
                );
            },
        }),
        {
            name: 'userObject',
            partialize: (state) => state,
        }
    )
);
