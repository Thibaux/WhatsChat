import React from 'react';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Picker from 'emoji-picker-react';
import { EmojiClickData } from 'emoji-picker-react/src/types/exposedTypes';

interface EmojiPickerModalInterface {
    isOpen: boolean;
    onClose: () => void;
    handleEmojiPickerClick: (emoji: EmojiClickData, event: MouseEvent) => void;
}

export const EmojiPickerModal = ({
    isOpen,
    onClose,
    handleEmojiPickerClick,
}: EmojiPickerModalInterface) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='sm'>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Picker
                        onEmojiClick={handleEmojiPickerClick}
                        lazyLoadEmojis
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
