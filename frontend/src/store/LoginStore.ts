import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { postLoginDetails } from '../services/UserService/LoginServices';
import { useUserStore } from './UserStore';

type LoginStore = {
    successfulLogin: boolean;
    showFailedLoginError: boolean;
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
    checkIfUserIsLoggedIn: () => void;
};

export const useLoginStore = create<LoginStore>()(
    devtools((set) => ({
        successfulLogin: false,
        showFailedLoginError: false,
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

            if (result.status === 'SUCCESS') {
                set(
                    produce((draft) => {
                        draft.successfulLogin = true;
                    })
                );

                // set the userObject in the localstorage
                useUserStore
                    .getState()
                    .setUserObject(result.data as UserObject);
            } else {
                console.log(result.data?.response?.data);
                set(
                    produce((draft) => {
                        draft.showFailedLoginError = true;
                    })
                );
            }
        },
        checkIfUserIsLoggedIn: async () => {
            if (useUserStore.getState().userObject._id) {
                set(
                    produce((draft) => {
                        draft.successfulLogin = true;
                    })
                );
            }
        },
    }))
);
