import React, { useEffect } from 'react';
import { useChatStore } from '../../../../store/store';

export const ChatContent = () => {
    // const { chatMessages, senderOfFirstMessage, myRef } = useChatContent();
    const { chatMessages, getChatMessages } = useChatStore();

    useEffect(() => {
        getChatMessages();
    }, []);

    return <p>helejfl;</p>;
    // <div className={styles.contentWrapper}>
    //     {chatMessages.map(({ id, sender, message }) => {
    //         if (senderOfFirstMessage === sender) {
    //             return (
    //                 <div
    //                     id={String(id)}
    //                     key={id}
    //                     className={styles.contentWrapper__leftMss}
    //                 >
    //                     <ChatMessage sender={sender} message={message} />
    //                 </div>
    //             );
    //         }
    //         return (
    //             <div
    //                 ref={myRef}
    //                 id={String(id)}
    //                 key={id}
    //                 className={styles.contentWrapper__rightMss}
    //             >
    //                 <ChatMessage sender={sender} message={message} />
    //             </div>
    //         );
    //     })}
    // </div>
};
