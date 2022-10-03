import * as React from 'react';
import { Textarea } from '@chakra-ui/react';
import styles from './chatInput.module.scss';
import { useSendInput } from './useSendInput';
import { SendButton } from '../../../UI/Buttons';
import { useChatsStore } from '../../../../store/ChatsStore';
import { EmojiPickerModal } from '../../../UI/Modals/EmojiPickerModal/EmojiPickerModal';

export const ChatInput = () => {
    const {
        messageValue,
        handleTextChange,
        handleSend,
        handleEmojiPickerClick,
        emojiPickerModalIsOpen,
    } = useSendInput();

    const { currentChat } = useChatsStore();

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputWrapper__textarea}>
                <Textarea
                    value={messageValue}
                    onChange={handleTextChange}
                    placeholder='Your message'
                    size='sm'
                    resize='none'
                    disabled={currentChat.chatId === ''}
                />
            </div>
            {/* <Icon as={BsEmojiSmileUpsideDown} /> */}
            <EmojiPickerModal isOpen={emojiPickerModalIsOpen} />
            {/* <div onClick={handleEmojiPickerClick} /> */}

            <SendButton handleSend={handleSend} />
        </div>
    );
};
