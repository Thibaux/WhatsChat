import React, { ChangeEvent, useState } from 'react';

export const useLoginForm = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const validateLogin = (formValues: loginValues) => {
        const errors = {} as loginValues;
        if (!emailRegex.test(emailValue)) errors.emailValue = 'Required';
        if (!formValues.passwordValue) errors.passwordValue = 'Required';

        return errors;
    };

    // const submitLogin = (formValues: loginValues) => {
    //     console.log('formValues');
    //     console.log('formValues');
    //     console.log(formValues);
    // };

    const submitLogin = (e: any) => {
        console.log(e);
        console.log('formValues');
        console.log('formValues');
    };

    return {
        handleEmailChange,
        handlePasswordChange,
        submitLogin,
        validateLogin,
    };
};
