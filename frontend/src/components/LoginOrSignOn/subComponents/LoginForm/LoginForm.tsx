import React from 'react';
import styles from './loginForm.module.scss';
import { SubmitButton } from '../../../Buttons/SubmitButton';
import { TextInput } from '../../../Input/TextInput/TextInput';
import { PasswordInput } from '../../../Input/PasswordInput';
import { useLoginForm } from './useLoginFrom';

export const LoginForm = () => {
    const {
        loginFormValues,
        loginFormErrors,
        handleEmailChange,
        handlePasswordChange,
        submitLogin,
    } = useLoginForm();

    return (
        <div className={styles.loginFormWrapper}>
            <div className={styles.loginFormWrapper__email}>
                <TextInput
                    value={loginFormValues.emailValue}
                    handleChange={handleEmailChange}
                    label='E-mail address'
                    placeholder='john.doe@email.com'
                    hasError={loginFormErrors.emailValueError}
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
