import create from 'zustand';
import produce from 'immer';

export type ChatStoreInterface = {
    chatTitle: string;
    chatMessages: Message[];
    clearMessages: () => void;
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
}));
