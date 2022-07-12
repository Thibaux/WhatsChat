import create from 'zustand';
import produce from 'immer';

interface ChatStoreInterface {
  chatName: string;
  chatMessages: ChatMessage[];
  clearMessages: () => void;
  removeAllBears: () => void;
}

export const useChatStore = create<ChatStoreInterface>((set) => ({
  chatName: 'default name',
  chatMessages: [
    {
      id: 1,
      sender: 'jan',
      message: 'this is mss',
    },
    {
      id: 2,
      sender: 'piet',
      message: 'this is mss van piet',
    },
  ],
  clearMessages: () =>
    set(
      produce((draft) => {
        draft.chatMessages = [];
      })
    ),
  removeAllBears: () => set(() => ({ chatName: 'chatName - up' })),
}));
