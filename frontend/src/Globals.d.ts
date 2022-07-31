declare module '*.module.css';
declare module '*.module.scss';

type ChatMessage = {
    id: number;
    sender: string;
    message: string;
};

type UserValues = {
    emailValue: string;
    passwordValue: string;
    usernameValue: string;
};

type LoginValues = Pick<UserValues, 'emailValue', 'passwordValue'>;

type LoginValuesErrors = {
    emailValueError: boolean;
    passwordValueError: boolean;
    usernameValuesError?: boolean;
};
