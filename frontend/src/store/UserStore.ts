import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { getUsers } from '../services/UserService/UserService';

type UserStore = {
    userObject: UserObject;
    users: UserObject[];
    setUserObject: (userObject: UserObject) => void;
    getAllUsers: (searchQuery?: string) => void;
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
        }),
        {
            name: 'users',
            partialize: (state) => state,
        }
    )
);
