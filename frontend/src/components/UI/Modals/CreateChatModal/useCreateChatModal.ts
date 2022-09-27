import { ChangeEvent, useEffect, useState } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';

import { convertUsersToSearchListInput } from '../../../../utils/converting/convertUsersToSearchListInput';
import { excludeUserFromList } from '../../../../utils/converting/excludeUserFromList';

interface UseCreateChatModalInterface {
    isOpen: boolean;
    onClose: () => void;
}

export const useCreateChatModal = ({
    isOpen,
    onClose,
}: UseCreateChatModalInterface) => {
    const { userObject, users, getAllUsers, setSelectedUser, selectedUser } =
        useUserStore();
    const { handleCreateChat } = useChatsStore();
    const [chatTitleValue, setChatTitleValue] = useState('');
    const [showErrorMss, setShowErrorMss] = useState(false);
    const [errorMss, setErrorMss] = useState('');

    const usersExceptLoggedInUser = excludeUserFromList(users, userObject);
    const searchListUsers = convertUsersToSearchListInput(
        usersExceptLoggedInUser
    );

    const handleChatTitleChange = (
        updatedChatTitle: ChangeEvent<HTMLInputElement>
    ) => {
        setChatTitleValue(updatedChatTitle.target.value);
    };

    const handleCreate = async () => {
        setShowErrorMss(false);

        if (selectedUser) {
            const result = await handleCreateChat({
                userId: selectedUser.value,
                chatTitle: chatTitleValue,
            });

            if (result.status === 'SUCCESS') {
                onClose();
                setChatTitleValue('');
            } else {
                setShowErrorMss(true);
                setErrorMss(result.data.response.data.message);
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            getAllUsers();
        }
    }, [isOpen]);

    return {
        setSelectedUser,
        searchListUsers,
        chatTitleValue,
        handleChatTitleChange,
        handleCreate,
        showErrorMss,
        errorMss,
    };
};
