import * as React from 'react';
import { Textarea } from '@mantine/core';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';

export const ChatInput = () => {
  const { messageValue, handleSend, handleTextChange } = useSendInput();

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputWrapper__textarea}>
        <Textarea
          value={messageValue}
          onChange={handleTextChange}
          placeholder='Your comment'
          radius='xs'
          required
          styles={{ root: { width: 650 } }}
        />
      </div>
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
