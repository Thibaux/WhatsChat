import * as React from 'react';
import { useChatStore } from '../../../../store/store';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chatContent.module.scss';

export const ChatContent = () => {
  const { chatMessages } = useChatStore();
  const senderOfFirstMessage = String(chatMessages[0].sender);

  return (
    <div className={styles.contentWrapper}>
      {chatMessages.map(({ id, sender, message }) => {
        if (sender === senderOfFirstMessage) {
          return (
            <div key={id} className={styles.contentWrapper__leftMss}>
              <ChatMessage sender={sender} message={message} />;
            </div>
          );
        }
        return <ChatMessage key={id} sender={sender} message={message} />;
      })}
    </div>
  );
};
