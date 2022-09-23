import * as React from 'react';
import styles from './chatHeader.module.scss';
import { useUserStore } from '../../../../store/UserStore';

export const ChatHeader = () => {
    const { userObject } = useUserStore();

    return (
        <div className={styles.titleWrapper}>
            <div className={styles.userName}>{userObject.username}</div>
        </div>
    );
};
