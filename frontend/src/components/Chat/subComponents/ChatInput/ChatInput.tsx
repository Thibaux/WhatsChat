import * as React from 'react';
import { useState } from 'react';
import styles from './chatInput.module.scss';
import { UseSendInput } from './UseSendInput';

export const ChatInput = () => {
  const { handleSend } = UseSendInput();
  const [messageValue, setMessageValue] = useState("Type you're message...");

  return (
    <div className={styles.inputWrapper}>
      <textarea value={messageValue} id='textarea' />
      <div
        className={styles.inputWrapper__sendButton}
        onClick={handleSend}
        onKeyDown={handleSend}
        role='button'
        tabIndex={-1}
      >
        SEND
      </div>
    </div>
  );
};
