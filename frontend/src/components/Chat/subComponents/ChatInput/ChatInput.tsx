import * as React from 'react';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';

export const ChatInput = () => {
  const { messageValue, handleSend, handleTextChange } = useSendInput();

  return (
    <div className={styles.inputWrapper}>
      <textarea
        value={messageValue}
        onChange={handleTextChange}
        id='textarea'
      />
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
