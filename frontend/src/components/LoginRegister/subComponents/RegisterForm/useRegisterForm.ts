import { ChangeEvent, useEffect, useState } from 'react';
import { useLoginRegisterStore } from '../../../../store/LoginStore';
import { objectHasSomeTrueValues } from '../../../../utils/Validation';

export const useRegisterForm = () => {
    const {
        registerFormValues,
        registerFormErrors,
        updateFormValue,
        clearRegisterErrors,
        postRegister,
    } = useLoginRegisterStore();
    const [submittedRegister, setSubmittedRegister] = useState(false);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFormValue({
            value: e.target.value,
            objectName: 'registerFormValues',
            keyName: 'usernameValue',
        });
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFormValue({
            value: e.target.value,
            objectName: 'registerFormValues',
            keyName: 'emailValue',
        });
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFormValue({
            value: e.target.value,
            objectName: 'registerFormValues',
            keyName: 'passwordValue',
        });
    };

    const validateRegisterValues = (): boolean => {
        if (registerFormValues.usernameValue === '') {
            updateFormValue({
                value: true,
                objectName: 'registerFormErrors',
                keyName: 'usernameValue',
            });
        }
        if (registerFormValues.emailValue === '') {
            updateFormValue({
                value: true,
                objectName: 'registerFormErrors',
                keyName: 'emailValueError',
            });
        }
        if (registerFormValues.passwordValue === '') {
            updateFormValue({
                value: true,
                objectName: 'registerFormErrors',
                keyName: 'passwordValueError',
            });
        }

        return !objectHasSomeTrueValues(registerFormErrors);
    };

    const submitRegister = () => {
        setSubmittedRegister(true);
        clearRegisterErrors();

        if (validateRegisterValues()) {
            postRegister(registerFormValues);
        }
    };

    useEffect(() => {
        if (submittedRegister) {
            validateRegisterValues();
        }
    }, [submittedRegister]);

    return {
        registerFormValues,
        registerFormErrors,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        submitRegister,
    };
};
