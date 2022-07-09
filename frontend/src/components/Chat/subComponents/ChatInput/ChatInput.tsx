import * as React from 'react';
import styles from './chatInput.module.scss';

export const ChatInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <textarea id='textarea'>Type you&apos;re message...</textarea>
      <button
        id='send-button'
        aria-label='send'
        type='submit'
        className={styles.inputWrapper__sendButton}
      >
        Send
      </button>
    </div>
  );
};
