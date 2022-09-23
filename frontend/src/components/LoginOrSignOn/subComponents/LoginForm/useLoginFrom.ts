import { ChangeEvent, useEffect, useState } from 'react';
import { useLoginStore } from '../../../../store/LoginStore';
import { objectHasSomeTrueValues } from '../../../../utils/Validation';

export const useLoginForm = () => {
    const {
        loginFormValues,
        loginFormErrors,
        updateLoginFormValue,
        clearLoginErrors,
        postLogin,
    } = useLoginStore();
    const [submittedLogin, setSubmittedLogin] = useState(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateLoginFormValue({
            value: e.target.value,
            objectName: 'loginFormValues',
            keyName: 'emailValue',
        });
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateLoginFormValue({
            value: e.target.value,
            objectName: 'loginFormValues',
            keyName: 'passwordValue',
        });
    };

    const validateLoginValues = (): boolean => {
        if (loginFormValues.emailValue === '') {
            updateLoginFormValue({
                value: true,
                objectName: 'loginFormErrors',
                keyName: 'emailValueError',
            });
        }
        if (loginFormValues.passwordValue === '') {
            updateLoginFormValue({
                value: true,
                objectName: 'loginFormErrors',
                keyName: 'passwordValueError',
            });
        }

        return !objectHasSomeTrueValues(loginFormErrors);
    };

    const submitLogin = () => {
        setSubmittedLogin(true);
        clearLoginErrors();

        if (validateLoginValues()) {
            postLogin(loginFormValues);
        }
    };

    useEffect(() => {
        if (submittedLogin) {
            validateLoginValues();
        }
    }, [submittedLogin]);

    return {
        loginFormValues,
        handleEmailChange,
        handlePasswordChange,
        submitLogin,
        loginFormErrors,
    };
};
