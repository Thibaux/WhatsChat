import React, { ChangeEvent, useState } from 'react';
import styles from './loginForm.module.scss';
import { SubmitButton } from '../../../Buttons/SubmitButton';
import { TextInput } from '../../../Input/TextInput';
import { PasswordInput } from '../../../Input/PasswordInput';
import { useLoginForm } from './useLoginFrom';
import { Form, Field, useField, useForm } from 'react-final-form';

export const LoginForm = () => {
    const {
        handleEmailChange,
        handlePasswordChange,
        submitLogin,
        validateLogin,
    } = useLoginForm();

    // gwn met state doen

    let submit;
    return (
        <div className={styles.loginFormWrapper}>
            <Form
                onSubmit={submitLogin}
                validate={validateLogin}
                render={({ values, handleSubmit }) => {
                    submit = handleSubmit;
                    return (
                        <>
                            <div className={styles.loginFormWrapper__email}>
                                <TextInput
                                    value={values.emailValue}
                                    handleChange={handleEmailChange}
                                    label={'E-mail address'}
                                    placeholder={'john.doe@email.com'}
                                    hasError={false}
                                />
                            </div>
                            <PasswordInput
                                value={values.passwordValue}
                                handleChange={handlePasswordChange}
                            />

                            <div className={styles.loginBtnWrapper}>
                                <SubmitButton
                                    buttonText='Login'
                                    onSubmit={submitLogin}
                                />
                            </div>
                        </>
                    );
                }}
            />
        </div>
    );
};
