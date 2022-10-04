import * as React from 'react';
import { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';
import { SendButton } from '../../../UI/Buttons';
import { MessageInput } from '../../../Forms/Input/MessageInput/MessageInput';
import { EmojiPickerModal } from '../../../UI/Modals/EmojiPickerModal/EmojiPickerModal';

export const ChatInput = () => {
    const {
        messageValue,
        handleTextChange,
        handleSend,
        handleEmojiPickerClick,
        isOpen,
        handleEmojiOpen,
        onClose,
        chatId,
    } = useSendInput();
    const [over, setOver] = useState(false);
    let emojiWrapperStyle = {};

    if (over && chatId !== '') {
        emojiWrapperStyle = {
            cursor: 'pointer',
            backgroundColor: '#9a9a9a',
        };
    }

    return (
        <div className={styles.inputWrapper}>
            <div
                onClick={handleEmojiOpen}
                className={styles.inputWrapper__emojiWrapper}
                style={emojiWrapperStyle}
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <Icon as={BsEmojiSmileUpsideDown} w={6} h={6} />
            </div>

            <div className={styles.inputWrapper__textarea}>
                <MessageInput
                    value={messageValue}
                    handleChange={handleTextChange}
                    placeholder='Your message'
                    isDisabled={chatId === ''}
                />
            </div>

            {isOpen && (
                <EmojiPickerModal
                    handleEmojiPickerClick={handleEmojiPickerClick}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}

            <SendButton handleSend={handleSend} />
        </div>
    );
};
