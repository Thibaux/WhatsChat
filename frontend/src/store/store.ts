import create from 'zustand';
import produce from 'immer';
import { getChats } from '../services/ChatService/GetChats';

export type ChatStoreInterface = {
    chatTitle: string;
    chatMessages: ChatMessage[];
    getChatMessages: () => void;
    clearMessages: () => void;
    sendMessage: (payload: ChatMessage) => void;
};

export const useChatStore = create<ChatStoreInterface>((set) => ({
    chatTitle: 'default name',
    chatMessages: [] as ChatMessage[],
    getChatMessages: async () => {
        const result = await getChats();
        set(
            produce((draft) => {
                draft.chatMessages = result;
            })
        );
    },
    clearMessages: () =>
        set(
            produce((draft) => {
                draft.chatName = 'diff';
            })
        ),
    // sendMessage: (payload: ChatMessage) =>
    //   set(
    //     produce((draft) => {
    //       draft.chatMessages.push(payload);
    //     })
    //   ),
    sendMessage: (payload: ChatMessage) => {
        set(
            produce((draft) => {
                draft.chatMessages.push(payload);
            })
        );
    },
}));
