import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { GenericError } from '../../Errors';

interface ConfirmDeleteChatInterface {
    isOpen: boolean;
    onClose: () => void;
}

export const ConfirmDeleteChat = ({
    isOpen,
    onClose,
}: ConfirmDeleteChatInterface) => {
    const { handleDeleteChat, statusDeletionChat } = useChatsStore();

    const handleDelete = async () => {
        const result = await handleDeleteChat();

        if (result.status === 'SUCCESS') {
            onClose();
        }
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Are you sure you want to delete this chat?
                </ModalHeader>
                <ModalBody>
                    This is a one way action! After deletion there is no way to
                    get this chat back.
                </ModalBody>
                <ModalCloseButton />
                <ModalFooter>
                    <Button colorScheme='red' onClick={handleDelete}>
                        Delete
                    </Button>
                </ModalFooter>
                {statusDeletionChat.status === 'FAILED' && (
                    <GenericError
                        title=''
                        description={statusDeletionChat.message}
                    />
                )}
            </ModalContent>
        </Modal>
    );
};
