import * as React from 'react';
import styles from './chat.module.scss';
import { ChatContent } from './subComponents/ChatContent/ChatContent';
import { ChatHeader } from './subComponents/ChatHeader/ChatHeader';
import { ChatInput } from './subComponents/ChatInput/ChatInput';

export const Chat = () => {
  return (
    <div className={styles.chatWrapper}>
      <section className={styles.chatWrapper__headerWapper}>
        <ChatHeader />
      </section>
      <section className={styles.chatWrapper__contentWapper}>
        <ChatContent />
      </section>
      <section className={styles.chatWrapper__intputWapper}>
        <ChatInput />
      </section>
    </div>
  );
};
