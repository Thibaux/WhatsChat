import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { postLoginDetails } from '../services/UserService/LoginServices';
import { useUserStore } from './UserStore';

type LoginStore = {
    loginFormValues: LoginValues;
    loginFormErrors: LoginValuesErrors;
    updateLoginFormValue: ({
        value,
        objectName,
        keyName,
    }: {
        value: string | boolean;
        objectName: string;
        keyName: string;
    }) => void;
    clearLoginErrors: () => void;
    postLogin: (payload: LoginValues) => void;
    successfulLogin: boolean;
};

export const useLoginStore = create<LoginStore>()(
    devtools((set) => ({
        successfulLogin: false,
        loginFormValues: {
            email: '',
            passwordValue: '',
        },
        loginFormErrors: {
            emailValueError: false,
            passwordValueError: false,
        },
        updateLoginFormValue: async ({ value, objectName, keyName }) => {
            await set(
                produce((draft) => {
                    draft[objectName][keyName] = value;
                })
            );
        },
        clearLoginErrors: () => {
            set(
                produce((draft) => {
                    draft.loginFormErrors = {
                        emailValueError: false,
                        passwordValueError: false,
                        usernameValuesError: false,
                    };
                })
            );
        },
        postLogin: async (payload: LoginValues) => {
            const result = await postLoginDetails({
                email: payload.emailValue,
                password: payload.passwordValue,
            });

            useUserStore.getState().setUserObject(result as UserObject);

            set(
                produce((draft) => {
                    draft.successfulLogin = true;
                })
            );
        },
    }))
);
