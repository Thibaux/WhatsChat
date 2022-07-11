import * as React from 'react';
import styles from './chatInput.module.scss';
import { UseSendInput } from './UseSendInput';

export const ChatInput = () => {
  const { handleSend } = UseSendInput();

  return (
    <div className={styles.inputWrapper}>
      <textarea id='textarea'>Type you&apos;re message...</textarea>
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
