import React, { ChangeEvent, useState } from 'react';
import styles from './registerForm.module.scss';
import { TextInput } from '../../../Input/TextInput/TextInput';
import { PasswordInput } from '../../../Input/PasswordInput';
import { SubmitButton } from '../../../Buttons/SubmitButton';

export const RegisterForm = () => {
    const [value, setValue] = useState('');
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className={styles.registerFormWrapper}>
            <div className={styles.registerFormWrapper__email}>
                <TextInput
                    label='Username'
                    placeholder='John'
                    value=''
                    handleChange={() => {}}
                    hasError={false}
                />
            </div>
            <div className={styles.registerFormWrapper__username}>
                <TextInput
                    label='E-mail address'
                    placeholder='john.doe@email.com'
                    value=''
                    handleChange={() => {}}
                    hasError={false}
                />
            </div>
            <div>
                <PasswordInput
                    value={value}
                    handleChange={handlePasswordChange}
                    hasError={false}
                />
            </div>

            <div className={styles.registerBtnWrapper}>
                <SubmitButton buttonText='Sign up' handleSubmit={() => {}} />
            </div>
        </div>
    );
};
