import * as React from 'react';
import styles from './chatHeader.module.scss';

export const ChatHeader = () => {
  const chatTitel = 'sdf';

  return (
    <div className={styles.titleWrapper}>
      <h2>{chatTitel}</h2>
    </div>
  );
};
