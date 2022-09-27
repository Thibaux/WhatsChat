import React, { useEffect, useRef } from 'react';
import styles from './loginForm.module.scss';
import { SubmitButton } from '../../../UI/Buttons';
import { TextInput } from '../../../Forms/Input/TextInput/TextInput';
import { PasswordInput } from '../../../Forms/Input/PasswordInput';
import { useLoginForm } from './useLoginFrom';

export const LoginForm = () => {
    const {
        loginFormValues,
        loginFormErrors,
        handleEmailChange,
        handlePasswordChange,
        submitLogin,
    } = useLoginForm();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div className={styles.loginFormWrapper}>
            <div className={styles.loginFormWrapper__email}>
                <TextInput
                    value={loginFormValues.emailValue}
                    handleChange={handleEmailChange}
                    hasError={loginFormErrors.emailValueError}
                    label='E-mail address'
                    placeholder='john.doe@email.com'
                    innerRef={inputRef}
                />
            </div>
            <PasswordInput
                value={loginFormValues.passwordValue}
                handleChange={handlePasswordChange}
                hasError={loginFormErrors.passwordValueError}
            />

            <div className={styles.loginBtnWrapper}>
                <SubmitButton buttonText='Login' handleSubmit={submitLogin} />
            </div>
        </div>
    );
};
