import create from 'zustand';
import { persist } from 'zustand/middleware';
import produce from 'immer';

type UserStore = {
    userObject: UserObject;
    setUserObject: (userObject: UserObject) => void;
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
            setUserObject: async (userObject: UserObject) => {
                await set(
                    produce((draft) => {
                        draft.userObject = userObject;
                    })
                );
            },
        }),
        {
            name: 'userObject',
            partialize: (state) => state,
        }
    )
);
