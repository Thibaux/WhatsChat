import React from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chatContent.module.scss';
import { useMessagesStore } from '../../../../store/MessagesStore';

export const ChatContent = () => {
    const { messages } = useMessagesStore();

    return (
        <div className={styles.contentWrapper}>
            {messages.map(({ _id, sender, content }) => {
                return (
                    <div
                        id={String(_id)}
                        key={_id}
                        className={styles.contentWrapper__leftMss}
                    >
                        <ChatMessage
                            sender={sender.username}
                            message={content}
                        />
                    </div>
                );
            })}
        </div>
    );
};
