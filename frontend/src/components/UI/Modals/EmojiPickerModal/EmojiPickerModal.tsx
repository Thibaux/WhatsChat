import React from 'react';
// import Picker from 'emoji-picker-react';
// import { EmojiClickData } from 'emoji-picker-react/src/types/exposedTypes';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface EmojiPickerModalInterface {
    isOpen: boolean;
    onClose: () => void;
    // handleEmojiPickerClick: (emoji: EmojiClickData, event: MouseEvent) => void;
}

export const EmojiPickerModal = ({
    isOpen,
    onClose,
}: EmojiPickerModalInterface) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='sm'>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    {/* <Picker */}
                    {/*    onEmojiClick={handleEmojiPickerClick} */}
                    {/*    lazyLoadEmojis */}
                    {/* /> */}
                    <Picker data={data} onEmojiSelect={console.log} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
