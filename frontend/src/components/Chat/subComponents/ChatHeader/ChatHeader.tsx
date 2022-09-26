import * as React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import styles from './chatHeader.module.scss';
import { useUserStore } from '../../../../store/UserStore';
import { CreateChatModal } from '../../../UI/Modals';
import { useChatsStore } from '../../../../store/ChatsStore';

export const ChatHeader = () => {
    const { userObject } = useUserStore();
    const { handleCreateChat } = useChatsStore();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={styles.titleWrapper}>
            <Button onClick={onOpen}>Create chat</Button>

            <CreateChatModal
                isOpen={isOpen}
                onClose={onClose}
                handleCreateChat={handleCreateChat}
            />

            <div className={styles.userName}>{userObject.username}</div>
        </div>
    );
};
