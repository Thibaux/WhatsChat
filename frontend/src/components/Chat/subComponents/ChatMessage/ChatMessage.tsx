import * as React from 'react';
import styles from './chatMessage.module.scss';

type ChatMessageInterface = {
    sender: string;
    message: string;
};

export const ChatMessage = ({ sender, message }: ChatMessageInterface) => {
    return (
        <div className={styles.messageWrapper}>
            <div className={styles.messageWrapper__senderTitle}>{sender}</div>
            <div className={styles.messageWrapper__messageBody}>{message}</div>
        </div>
    );
};
