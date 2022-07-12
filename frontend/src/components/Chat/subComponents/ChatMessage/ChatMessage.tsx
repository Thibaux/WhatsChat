import * as React from 'react';
import styles from './chatMessage.module.scss';

interface ChatMessageInterface {
  sender: string;
  message: string;
}

export const ChatMessage = ({ sender, message }: ChatMessageInterface) => {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.messageWrapper__senderTitle}>S: {sender}</div>
      <div className={styles.messageWrapper__messageBody}>M: {message}</div>
    </div>
  );
};
