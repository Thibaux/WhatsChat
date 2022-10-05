import * as React from 'react';
import { useRef, useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { useOnClickOutside } from 'usehooks-ts';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';
import { SendButton } from '../../../UI/Buttons';
import { MessageInput } from '../../../Forms/Input';
import { EmojiPickerModal } from '../../../UI/Modals';

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
    const ref = useRef(null);

    if (over && chatId !== '') {
        emojiWrapperStyle = {
            cursor: 'pointer',
            backgroundColor: '#9a9a9a',
        };
    }

    useOnClickOutside(ref, onClose);
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
                    wrapperRef={ref}
                />
            )}

            <SendButton handleSend={handleSend} />
        </div>
    );
};
