import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { MenuItem, useDisclosure } from '@chakra-ui/react';
import { ConfirmDeleteChat } from '../../../../UI/Modals';

export const DeleteChat = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MenuItem onClick={onOpen} icon={<DeleteIcon />}>
                Delete chat
            </MenuItem>
            <ConfirmDeleteChat isOpen={isOpen} onClose={onClose} />
        </>
    );
};
