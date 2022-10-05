import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SOCKET } from '../../../../utils/Constants';
import { useMessagesStore } from '../../../../store/MessagesStore';

export const useChatContent = () => {
    const { localMessages, updateLocalMessages } = useMessagesStore();
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
        SOCKET.on('admin_message', ({ message }) => {
            updateLocalMessages({
                userId: uuidv4(),
                username: 'admin',
                message,
            });
        });

        return () => {
            SOCKET.off('receive_message');
            SOCKET.off('admin_message');
        };
    }, [SOCKET, localMessages, updateLocalMessages]);

    return {
        scrollIntoViewRef,
        localMessages,
    };
};
