import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { GenericButton } from '../../../../UI/Buttons';
import { ConfirmDeleteChat } from '../../../../UI/Modals';

export const DeleteChat = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <GenericButton
                title='Delete chat'
                handleClick={onOpen}
                color='red'
                icon={<DeleteIcon />}
            />
            <ConfirmDeleteChat isOpen={isOpen} onClose={onClose} />
        </>
    );
};
