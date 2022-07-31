declare module '*.module.css';
declare module '*.module.scss';

type ChatMessage = {
    id: number;
    sender: string;
    message: string;
};

type loginValues = {
    emailValue: string;
    passwordValue: string;
};
