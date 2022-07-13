import * as React from 'react';
import { useState } from 'react';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';

export const ChatInput = () => {
  const { handleSend } = useSendInput();
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
