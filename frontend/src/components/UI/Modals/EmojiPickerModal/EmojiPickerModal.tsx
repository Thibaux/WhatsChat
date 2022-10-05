import React from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import styles from './emojiPickerModal.module.scss';

interface EmojiPickerModalInterface {
    handleEmojiPickerClick: (emoji: EmojiClickData, event: MouseEvent) => void;
    wrapperRef: any;
}

export const EmojiPickerModal = ({
    handleEmojiPickerClick,
    wrapperRef,
}: EmojiPickerModalInterface) => {
    return (
        <div className={styles.emojiPickerWrapper} ref={wrapperRef}>
            <Picker
                onEmojiClick={handleEmojiPickerClick}
                lazyLoadEmojis
                previewConfig={{ showPreview: false }}
                skinTonesDisabled
                width={400}
                height={300}
            />
        </div>
    );
};
