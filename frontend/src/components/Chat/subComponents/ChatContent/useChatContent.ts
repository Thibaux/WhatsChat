import { useEffect } from 'react';
import { useChatStore } from '../../../../store/store';

export const useChatContent = () => {
    const { chatMessages, getChatMessages } = useChatStore();
    const senderOfFirstMessage = 'piet';

    // const scrollIntoViewRef = React.useRef(null as any);
    // const executeScroll = () => scrollIntoViewRef.current.scrollIntoView();
    //
    // useEffect(() => {
    //     executeScroll();
    // });

    useEffect(() => {
        console.log('asdfklj');
        const chatId = '62e1510a58cdd7e71198028f';
        getChatMessages(chatId);
    }, []);

    return { chatMessages, senderOfFirstMessage };
};
