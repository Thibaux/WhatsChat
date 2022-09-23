import { useEffect, useRef } from 'react';

export const useChatContent = () => {
    const scrollIntoViewRef = useRef(null as any);
    const executeScroll = () =>
        scrollIntoViewRef.current?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        executeScroll();
    });

    return {
        scrollIntoViewRef,
    };
};
