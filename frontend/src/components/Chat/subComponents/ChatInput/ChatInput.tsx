import * as React from 'react';
import { Textarea } from '@chakra-ui/react';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';
import { SendButton } from '../../../Buttons/SendButton';

export const ChatInput = () => {
    const { messageValue, handleTextChange } = useSendInput();

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputWrapper__textarea}>
                <Textarea
                    value={messageValue}
                    onChange={handleTextChange}
                    placeholder='Your message'
                    size='sm'
                    resize='none'
                />
            </div>
            <SendButton />
        </div>
    );
};
