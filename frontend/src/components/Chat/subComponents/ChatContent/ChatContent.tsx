import React from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { useChatContent } from './useChatContent';
import styles from './chatContent.module.scss';

export const ChatContent = () => {
    const { chatMessages } = useChatContent();

    return (
        <div className={styles.contentWrapper}>
            {chatMessages.map(({ _id, sender, content }) => {
                return (
                    <div
                        id={String(_id)}
                        key={_id}
                        className={styles.contentWrapper__leftMss}
                    >
                        <ChatMessage sender={sender} message={content} />
                    </div>
                );
            })}
        </div>
    );
};
