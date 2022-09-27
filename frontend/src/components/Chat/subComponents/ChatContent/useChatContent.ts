import { useEffect, useRef } from 'react';
import { SOCKET } from '../../../../utils/Constants';
import { useMessagesStore } from '../../../../store/MessagesStore';

export const useChatContent = () => {
    const { updateLocalMessages } = useMessagesStore();
    const scrollIntoViewRef = useRef(null as any);
    const executeScroll = () =>
        scrollIntoViewRef.current?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        executeScroll();
    });

    useEffect(() => {
        SOCKET.on('receive_message', ({ userId, username, message }) => {
            updateLocalMessages({ userId, username, message });
        });
    }, [SOCKET]);

    return {
        scrollIntoViewRef,
    };
};
