import React, { useEffect } from 'react';
import { useChatStore } from '../../../../store/store';

export const useChatContent = () => {
    const { chatMessages, getChatMessages } = useChatStore();
    const senderOfFirstMessage = 'piet';

    const myRef = React.useRef(null as any);
    const executeScroll = () => myRef.current.scrollIntoView();

    useEffect(() => {
        executeScroll();
    });

    useEffect(() => {
        console.log('asdfklj');
        getChatMessages();
    });

    return { chatMessages, senderOfFirstMessage, myRef };
};
