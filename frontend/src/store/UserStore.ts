import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { getUsers } from '../services/UserService';
import { SingleValue } from 'react-select';

type UserStore = {
    userObject: UserObject;
    users: UserObject[];
    selectedUser: SingleValue<SearchListInput>;
    setUserObject: (userObject: UserObject) => void;
    getAllUsers: (searchQuery?: string) => void;
    setSelectedUser: (user: SingleValue<SearchListInput>) => void;
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            userObject: {
                _id: '',
                username: '',
                email: '',
                picture: '',
                token: '',
            },
            users: [
                {
                    _id: '',
                    username: '',
                    email: '',
                    picture: '',
                    token: '',
                },
            ],
            selectedUser: {
                value: '',
                label: '',
            },
            setUserObject: async (userObject: UserObject) => {
                set(
                    produce((draft) => {
                        draft.userObject = userObject;
                    })
                );
            },
            getAllUsers: async (searchQuery) => {
                const result = await getUsers(searchQuery);

                set(
                    produce((draft) => {
                        draft.users = result.data;
                    })
                );
            },
            setSelectedUser: async (user: SingleValue<SearchListInput>) => {
                set(
                    produce((draft) => {
                        draft.selectedUser = user;
                    })
                );
            },
        }),
        {
            name: 'userStore',
            partialize: (state) => state,
        }
    )
);
