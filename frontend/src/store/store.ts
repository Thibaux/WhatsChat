import create from 'zustand';

interface ChatStoreInterface {
  chatName: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useChatStore = create<ChatStoreInterface>((set) => ({
  chatName: 'default name',
  increasePopulation: () => set(() => ({ chatName: 'chatName - up' })),
  removeAllBears: () => set(() => ({ chatName: 'chatName - up' })),
}));
