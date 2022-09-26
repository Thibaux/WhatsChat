import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage';
import { useLoginRegisterStore } from './store/LoginStore';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const App = () => {
    const { successfulLogin, checkIfUserIsLoggedIn } = useLoginRegisterStore();

    useEffect(() => {
        checkIfUserIsLoggedIn();
    }, []);

    return (
        <div className={styles.appWrapper}>
            {!successfulLogin ? <LoginRegisterPage /> : <ChatPage />}
        </div>
    );
};
