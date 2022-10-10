import * as React from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon, PlusSquareIcon } from '@chakra-ui/icons';
import styles from './chatHeader.module.scss';
import { useUserStore } from '../../../../store/UserStore';
import { CreateChatModal } from '../../../UI/Modals';
import { useChatsStore } from '../../../../store/ChatsStore';
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
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={onOpen} icon={<PlusSquareIcon />}>
                            Create chat
                        </MenuItem>
                        {currentChat.chatId !== '' && <DeleteChat />}
                        <MenuItem onClick={logUserOut} icon={<CloseIcon />}>
                            Log out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <CreateChatModal isOpen={isOpen} onClose={onClose} />

            <div className={styles.titleWrapper__right}>
                <p className={styles.userName}>{userObject.username}</p>
                <img src={userObject.picture} alt='User avatar' />
            </div>
        </div>
    );
};
