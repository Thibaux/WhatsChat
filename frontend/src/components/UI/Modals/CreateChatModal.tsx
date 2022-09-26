import React, { useEffect } from 'react';
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
import { SearchUser } from '../SelectList/SearchUser';
import { useUserStore } from '../../../store/UserStore';
import { convertUsersToSearchListInput } from '../../../utils/converting/convertUsersToSearchListInput';

interface CreateChatModalInterface {
    isOpen: boolean;
    onClose: () => void;
    handleCreateChat: () => void;
}

export const CreateChatModal = ({
    isOpen,
    onClose,
    handleCreateChat,
}: CreateChatModalInterface) => {
    const { users, getAllUsers } = useUserStore();

    const output = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    useEffect(() => {
        if (isOpen) {
            getAllUsers();
        }
        console.log(users);
        console.log(convertUsersToSearchListInput(users));
    }, [isOpen]);

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>With how do you want to chat?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SearchUser users={output} />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='green' onClick={handleCreateChat}>
                        Create
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
