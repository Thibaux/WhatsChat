import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chatContent.module.scss';
import { useUserStore } from '../../../../store/UserStore';
import { useChatContent } from './useChatContent';

export const ChatContent = () => {
    const { localMessages, scrollIntoViewRef } = useChatContent();
    const { userObject } = useUserStore();

    return (
        <div className={styles.contentWrapper}>
            {localMessages.map(({ userId, username, message }) => {
                if (userId !== userObject._id) {
                    return (
                        <div
                            id={userId}
                            key={uuidv4()}
                            className={styles.contentWrapper__rightMss}
                        >
                            <ChatMessage sender={username} message={message} />
                        </div>
                    );
                }
                return (
                    <div
                        ref={scrollIntoViewRef}
                        id={userId}
                        key={uuidv4()}
                        className={styles.contentWrapper__leftMss}
                    >
                        <ChatMessage sender={username} message={message} />
                    </div>
                );
            })}
        </div>
    );
};
