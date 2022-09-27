import React from 'react';
import styles from './registerForm.module.scss';
import { TextInput } from '../../../Forms/Input/TextInput/TextInput';
import { PasswordInput } from '../../../Forms/Input/PasswordInput';
import { SubmitButton } from '../../../UI/Buttons';
import { useRegisterForm } from './useRegisterForm';

export const RegisterForm = () => {
    const {
        registerFormValues,
        registerFormErrors,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        submitRegister,
    } = useRegisterForm();

    return (
        <div className={styles.registerFormWrapper}>
            <div className={styles.registerFormWrapper__email}>
                <TextInput
                    value={registerFormValues.usernameValue}
                    handleChange={handleUsernameChange}
                    hasError={registerFormErrors.usernameValueError}
                    label='Username'
                    placeholder='John'
                />
            </div>
            <div className={styles.registerFormWrapper__username}>
                <TextInput
                    value={registerFormValues.emailValue}
                    handleChange={handleEmailChange}
                    hasError={registerFormErrors.emailValueError}
                    label='E-mail address'
                    placeholder='john.doe@email.com'
                />
            </div>
            <div>
                <PasswordInput
                    value={registerFormValues.passwordValue}
                    handleChange={handlePasswordChange}
                    hasError={registerFormErrors.passwordValueError}
                />
            </div>

            <div className={styles.registerBtnWrapper}>
                <SubmitButton
                    buttonText='Sign up'
                    handleSubmit={submitRegister}
                />
            </div>
        </div>
    );
};
