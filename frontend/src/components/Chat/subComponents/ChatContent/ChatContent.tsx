import * as React from 'react';
import { useChatStore } from '../../../../store/store';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import styles from './chatContent.module.scss';

export const ChatContent = () => {
  const { chatMessages } = useChatStore();

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentWrapper__chats}>
        {chatMessages.map((mss) => (
          <div key={mss.id} className={styles.contentWrapper__chat}>
            <ChatMessage sender={mss.sender} message={mss.message} />
          </div>
        ))}
      </div>
    </div>
  );
};
