import create from 'zustand';
import produce from 'immer';

export type ChatStoreInterface = {
    chatTitle: string;
    chatMessages: Message[];
    clearMessages: () => void;
    sendMessage: (payload: Message) => void;
};

export const useChatStore = create<ChatStoreInterface>((set) => ({
    chatTitle: 'default name',
    chatMessages: [] as Message[],
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
