declare module '*.module.css';
declare module '*.module.scss';

type ChatMessage = {
    _id: number;
    chatTile: string;
    users: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
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

type UserObject = {
    _id: string;
    username: string;
    email: string;
    picture: string;
    token: string;
};
