import React, { useEffect } from 'react';
import { useChatStore, ChatStoreInterface } from '../../../../store/store';

export const useChatContent = () => {
  const { chatMessages, getChatMessages } = useChatStore();
  const senderOfFirstMessage = useChatStore(
    React.useCallback(
      (state: ChatStoreInterface) => state.chatMessages[0].sender,
      []
    )
  );

  const myRef = React.useRef(null as any);
  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    executeScroll();
  });

  useEffect(() => {
    getChatMessages();
  });

  return { chatMessages, senderOfFirstMessage, myRef };
};
