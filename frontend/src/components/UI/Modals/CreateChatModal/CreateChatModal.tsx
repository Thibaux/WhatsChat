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
import { SearchUser } from '../../SelectList/SearchUser';
import { TextInput } from '../../../Forms/Input';
import { useCreateChatModal } from './useCreateChatModal';
import styles from './createChatModal.module.scss';
import { GenericError } from '../../Errors';

interface CreateChatModalInterface {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateChatModal = ({
    isOpen,
    onClose,
}: CreateChatModalInterface) => {
    const {
        searchListUsers,
        setSelectedUser,
        chatTitleValue,
        handleChatTitleChange,
        handleCreate,
        showErrorMss,
        errorMss,
    } = useCreateChatModal({ onClose });

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>With how do you want to chat?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className={styles.searchUser}>
                        <SearchUser
                            users={searchListUsers}
                            handleChange={setSelectedUser}
                        />
                    </div>
                    <TextInput
                        label='Chat title (optional)'
                        placeholder='The best chat ever!'
                        value={chatTitleValue}
                        handleChange={handleChatTitleChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='green' onClick={handleCreate}>
                        Create
                    </Button>
                </ModalFooter>
                {showErrorMss && (
                    <GenericError
                        title={errorMss}
                        description='Please try another title'
                    />
                )}
            </ModalContent>
        </Modal>
    );
};
