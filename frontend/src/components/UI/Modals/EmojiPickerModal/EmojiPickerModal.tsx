import React from 'react';
import EmojiPicker from 'emoji-picker-react';

interface EmojiPickerModalInterface {
    isOpen: boolean;
}

export const EmojiPickerModal = ({ isOpen }: EmojiPickerModalInterface) => {
    return <>{isOpen ? <EmojiPicker /> : null}</>;
};
