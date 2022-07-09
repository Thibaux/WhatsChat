import React from 'react';
import styles from './App.module.scss';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const App = () => {
  return (
    <div className={styles.appWrapper}>
      <ChatPage />
    </div>
  );
};
