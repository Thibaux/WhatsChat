import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';
import { useUserStore } from './UserStore';
import { postCreateUser, postLoginDetails } from '../services/UserService';

type LoginStore = {
    successfulLogin: boolean;
    showFailedLoginError: boolean;
    successfulRegister: boolean;
    showFailedRegisterError: boolean;
    loginFormValues: LoginValues;
    loginFormErrors: LoginValuesErrors;
    registerFormValues: UserValues;
    registerFormErrors: LoginValuesErrors;
    updateFormValue: ({
        value,

        objectName,
        keyName,
    }: {
        value: string | boolean;
        objectName: string;
        keyName: string;
    }) => void;
    clearLoginErrors: () => void;
    clearRegisterErrors: () => void;
    postLogin: (payload: LoginValues) => void;
    postRegister: (payload: UserValues) => void;
    checkIfUserIsLoggedIn: () => void;
};

export const useLoginRegisterStore = create<LoginStore>()(
    devtools((set) => ({
        successfulLogin: false,
        showFailedLoginError: false,
        successfulRegister: false,
        showFailedRegisterError: false,
        loginFormValues: {
            email: '',
            passwordValue: '',
        },
        loginFormErrors: {
            emailValueError: false,
            passwordValueError: false,
        },
        registerFormValues: {
            usernameValue: '',
            emailValue: '',
            passwordValue: '',
        },
        registerFormErrors: {
            usernameValueError: false,
            emailValueError: false,
            passwordValueError: false,
        },
        updateFormValue: async ({ value, objectName, keyName }) => {
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
        clearRegisterErrors: () => {
            set(
                produce((draft) => {
                    draft.registerFormErrors = {
                        usernameValuesError: false,
                        emailValueError: false,
                        passwordValueError: false,
                    };
                })
            );
        },
        postLogin: async (loginValues: LoginValues) => {
            const result = await postLoginDetails(loginValues);

            if (result.status === 'SUCCESS') {
                set(
                    produce((draft) => {
                        draft.successfulLogin = true;
                        draft.showFailedLoginError = false;
                        draft.successfulRegister = false;
                        draft.showFailedRegisterError = false;
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
                        draft.successfulLogin = false;
                        draft.successfulRegister = false;
                        draft.showFailedRegisterError = false;
                    })
                );
            }
        },
        postRegister: async (payload: UserValues) => {
            const result = await postCreateUser(payload);

            if (result.status === 'SUCCESS') {
                set(
                    produce((draft) => {
                        draft.successfulRegister = true;
                        draft.showFailedRegisterError = false;
                        draft.successfulLogin = false;
                        draft.showFailedLoginError = false;
                    })
                );
            } else {
                console.log(result.data?.response?.data);
                set(
                    produce((draft) => {
                        draft.showFailedRegisterError = true;
                        draft.successfulRegister = false;
                        draft.successfulLogin = false;
                        draft.showFailedLoginError = false;
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
