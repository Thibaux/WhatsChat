import { ChangeEvent, useEffect, useState } from 'react';
import { objectHasSomeTrueValues } from '../../../../utils/Validation';
import { useLoginRegisterStore } from '../../../../store/LoginStore';

export const useLoginForm = () => {
    const {
        loginFormValues,
        loginFormErrors,
        updateFormValue,
        clearLoginErrors,
        postLogin,
    } = useLoginRegisterStore();
    const [submittedLogin, setSubmittedLogin] = useState(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFormValue({
            value: e.target.value,
            objectName: 'loginFormValues',
            keyName: 'emailValue',
        });
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFormValue({
            value: e.target.value,
            objectName: 'loginFormValues',
            keyName: 'passwordValue',
        });
    };

    const validateLoginValues = (): boolean => {
        if (loginFormValues.emailValue === '') {
            updateFormValue({
                value: true,
                objectName: 'loginFormErrors',
                keyName: 'emailValueError',
            });
        }
        if (loginFormValues.passwordValue === '') {
            updateFormValue({
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
