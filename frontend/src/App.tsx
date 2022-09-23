import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage';
import { useLoginStore } from './store/LoginStore';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const App = () => {
    const { successfulLogin, checkIfUserIsLoggedIn } = useLoginStore();

    useEffect(() => {
        checkIfUserIsLoggedIn();
    }, []);

    return (
        <div className={styles.appWrapper}>
            {!successfulLogin ? <LoginRegisterPage /> : <ChatPage />}
        </div>
    );
};
