import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { postLoginDetails } from '../services/LoginServices';

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
};

export const useLoginStore = create<LoginStore>()(
    devtools((set) => ({
        loginFormValues: {
            emailValue: '',
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
            await postLoginDetails(payload);
        },
    }))
);
