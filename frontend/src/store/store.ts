import create from 'zustand';
import produce from 'immer';

export interface ChatStoreInterface {
  chatName: string;
  chatMessages: ChatMessage[];
  getChatMessages: () => void;
  clearMessages: () => void;
  sendMessage: (payload: ChatMessage) => void;
}

export const useChatStore = create<ChatStoreInterface>((set) => ({
  chatName: 'default name',
  chatMessages: [] as ChatMessage[],
  getChatMessages: () => {},
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
