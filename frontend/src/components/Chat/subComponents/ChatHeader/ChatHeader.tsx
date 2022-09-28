import * as React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { PlusSquareIcon, SmallCloseIcon } from '@chakra-ui/icons';
import styles from './chatHeader.module.scss';
import { useUserStore } from '../../../../store/UserStore';
import { CreateChatModal } from '../../../UI/Modals';
import { useChatsStore } from '../../../../store/ChatsStore';
import { GenericButton } from '../../../UI/Buttons';
import { DeleteChat } from './subComponents/DeleteChat';

export const ChatHeader = () => {
    const { userObject } = useUserStore();
    const { currentChat } = useChatsStore();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const logUserOut = () => {
        window.localStorage.clear();
        location.reload();
    };

    return (
        <div className={styles.titleWrapper}>
            <div className={styles.titleWrapper__left}>
                <GenericButton
                    title='Create chat'
                    handleClick={onOpen}
                    color='gray'
                    icon={<PlusSquareIcon />}
                />
                {currentChat.chatId !== '' && <DeleteChat />}
            </div>
            <CreateChatModal isOpen={isOpen} onClose={onClose} />

            <div className={styles.titleWrapper__right}>
                <p className={styles.userName}>{userObject.username}</p>
                <GenericButton
                    title='Log out'
                    handleClick={logUserOut}
                    color='cyan'
                    icon={<SmallCloseIcon />}
                />
            </div>
        </div>
    );
};
