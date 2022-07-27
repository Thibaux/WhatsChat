import * as React from 'react';
import { useChatStore } from '../../../../store/store';
import styles from './chatHeader.module.scss';

export const ChatHeader = () => {
  const { chatName } = useChatStore();
  const userName = 'Klaas Jan';

  return (
    <div className={styles.titleWrapper}>
      <h2>{chatName}</h2>
      <div className={styles.userName}>{userName}</div>
    </div>
  );
};
