import create from 'zustand';
import produce from 'immer';
import { getMessagesOfChat } from '../services/ChatService/GetMessagesOfChat';

export type ChatStoreInterface = {
    chatTitle: string;
    chatMessages: Message[];
    getChatMessages: (chatId: string) => void;
    clearMessages: () => void;
    sendMessage: (payload: Message) => void;
};

export const useChatStore = create<ChatStoreInterface>((set) => ({
    chatTitle: 'default name',
    chatMessages: [] as Message[],
    getChatMessages: async (chatId: string) => {
        const result = await getMessagesOfChat(chatId);
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
    sendMessage: (payload: Message) => {
        set(
            produce((draft) => {
                draft.chatMessages.push(payload);
            })
        );
    },
}));
