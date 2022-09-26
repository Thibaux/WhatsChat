import { ChangeEvent, useEffect, useState } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';

import { convertUsersToSearchListInput } from '../../../../utils/converting/convertUsersToSearchListInput';
import { excludeUserFromList } from '../../../../utils/converting/excludeUserFromList';

export const useCreateChatModal = (isOpen: boolean) => {
    const { userObject, users, getAllUsers, setSelectedUser, selectedUser } =
        useUserStore();
    const { handleCreateChat } = useChatsStore();
    const [chatTitleValue, setChatTitleValue] = useState('');

    const usersExceptLoggedInUser = excludeUserFromList(users, userObject);
    const searchListUsers = convertUsersToSearchListInput(
        usersExceptLoggedInUser
    );

    const handleChatTitleChange = (
        updatedChatTitle: ChangeEvent<HTMLInputElement>
    ) => {
        setChatTitleValue(updatedChatTitle.target.value);
    };

    const handleCreate = () => {
        if (selectedUser) {
            handleCreateChat({
                userId: selectedUser.value,
                chatTitle: chatTitleValue,
            });
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
    };
};
