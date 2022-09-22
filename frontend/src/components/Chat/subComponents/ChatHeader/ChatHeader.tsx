import * as React from 'react';
import { useChatStore } from '../../../../store/store';
import styles from './chatHeader.module.scss';

export const ChatHeader = () => {
    const { chatTitle } = useChatStore();
    const userName = 'Klaas Jan';

    return (
        <div className={styles.titleWrapper}>
            <h2>{chatTitle}</h2>
            <div className={styles.userName}>{userName}</div>
        </div>
    );
};
