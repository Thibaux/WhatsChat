import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import styles from './registerForm.module.scss';
import { PasswordInput, TextInput } from '../../../Forms/Input';
import { useRegisterForm } from './useRegisterForm';
import { GenericButton } from '../../../UI/Buttons';

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
                <GenericButton
                    title='Sign up'
                    handleClick={submitRegister}
                    color='blue'
                    icon={<ArrowForwardIcon />}
                />
            </div>
        </div>
    );
};
