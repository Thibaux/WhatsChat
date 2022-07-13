import * as React from 'react';
import { useChatStore, ChatStoreInterface } from '../../../../store/store';

export const useChatContent = () => {
  const { chatMessages } = useChatStore();
  const senderOfFirstMessage = useChatStore(
    React.useCallback(
      (state: ChatStoreInterface) => state.chatMessages[0].sender,
      []
    )
  );

  const myRef = React.useRef(null as any);
  const executeScroll = () => myRef.current.scrollIntoView();

  React.useEffect(() => {
    executeScroll();
  });

  return { chatMessages, senderOfFirstMessage, myRef };
};
