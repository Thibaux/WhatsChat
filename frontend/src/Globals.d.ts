declare module '*.module.css';
declare module '*.module.scss';

type Chat = {
    _id: string;
    chatTitle: string;
    users: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    friendsUsername?: string;
};

type Message = {
    _id: string;
    sender: Sender;
    content: string;
    chat: Chat;
};

type Sender = Pick<UserObject, '_id', 'username', 'email', 'picture'>;

type UserValues = {
    emailValue: string;
    passwordValue: string;
    usernameValue: string;
};

type LoginValues = Pick<UserValues, 'emailValue', 'passwordValue'>;

type LoginValuesErrors = {
    emailValueError: boolean;
    passwordValueError: boolean;
    usernameValueError?: boolean;
};

type UserObject = {
    _id: string;
    username: string;
    email: string;
    picture: string;
    token: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

type SearchListInput = {
    value: string;
    label: string;
};

type ApiResponseType = {
    status: 'SUCCESS' | 'FAILED';
    data: any;
};

type LocalMessages = {
    userId: string;
    username: string;
    message: string;
};
