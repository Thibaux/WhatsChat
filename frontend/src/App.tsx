import React from 'react';
import styles from './App.module.scss';
import { LoginRegisterPage } from './pages/LoginRegisterPage/LoginRegisterPage';

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            {/*<ChatPage />*/}

            <LoginRegisterPage />
        </div>
    );
};
