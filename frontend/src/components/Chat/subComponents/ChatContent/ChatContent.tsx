import React from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chatContent.module.scss';
import { useMessagesStore } from '../../../../store/MessagesStore';
import { useUserStore } from '../../../../store/UserStore';
import { useChatContent } from './useChatContent';

export const ChatContent = () => {
    const { scrollIntoViewRef } = useChatContent();
    const { messages } = useMessagesStore();
    const { userObject } = useUserStore();

    return (
        <div className={styles.contentWrapper}>
            {messages.map(({ _id, sender, content }) => {
                if (sender._id !== userObject._id) {
                    return (
                        <div
                            id={String(_id)}
                            key={_id}
                            className={styles.contentWrapper__rightMss}
                        >
                            <ChatMessage
                                sender={sender.username}
                                message={content}
                            />
                        </div>
                    );
                }
                return (
                    <div
                        ref={scrollIntoViewRef}
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
