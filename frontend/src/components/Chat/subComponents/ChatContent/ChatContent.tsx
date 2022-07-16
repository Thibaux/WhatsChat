import React from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { useChatContent } from './useChatContent';
import styles from './chatContent.module.scss';

export const ChatContent = () => {
  const { chatMessages, senderOfFirstMessage, myRef } = useChatContent();

  return (
    <div className={styles.contentWrapper}>
      {chatMessages.map(({ id, sender, message }) => {
        if (senderOfFirstMessage === sender) {
          return (
            <div
              id={String(id)}
              key={id}
              className={styles.contentWrapper__leftMss}
            >
              <ChatMessage sender={sender} message={message} />
            </div>
          );
        }
        return (
          <div
            ref={myRef}
            id={String(id)}
            key={id}
            className={styles.contentWrapper__rightMss}
          >
            <ChatMessage sender={sender} message={message} />
          </div>
        );
      })}
    </div>
  );
};
