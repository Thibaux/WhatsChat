import create from 'zustand';
import produce from 'immer';

export interface ChatStoreInterface {
  chatName: string;
  chatMessages: ChatMessage[];
  clearMessages: () => void;
  sendMessage: (payload: ChatMessage) => void;
}

export const useChatStore = create<ChatStoreInterface>((set) => ({
  chatName: 'default name',
  chatMessages: [
    {
      id: 1,
      sender: 'piet',
      message: 'this is mss',
    },
    {
      id: 2,
      sender: 'piet',
      message:
        'this is mss van pietmss van pietmss van pietmss van pietthis is mss van pietmss van pietmss van pietmss van piet',
    },
    {
      id: 3,
      sender: 'jan',
      message: 'this is mss van pietmss van pietmss van pietmss van piet',
    },
    {
      id: 4,
      sender: 'jan',
      message: 'this is mss van pietmss van pietmss van pietmss van piet',
    },
    {
      id: 5,
      sender: 'piet',
      message: 'this is mss van pietmss van pietmss van pietmss van piet',
    },
  ],
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
  sendMessage: (payload: ChatMessage) => postMessage(payload),
}));
