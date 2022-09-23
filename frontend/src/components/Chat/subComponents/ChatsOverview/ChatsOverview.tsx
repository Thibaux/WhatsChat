import * as React from 'react';
import styles from './chatsOverview.module.scss';
import { useChatsOverview } from './useChatsOverview';
import { Header } from '../../../Header/Header';
import { convertDateTime } from '../../../../utils/convertDateTime';

export const ChatsOverview = () => {
    const { chats, handleClickToChat } = useChatsOverview();

    return (
        <div className={styles.chatsOverviewWrapper}>
            <Header />
            {chats.map(({ _id, chatTitle, updatedAt }) => (
                <div
                    id={String(_id)}
                    key={_id}
                    className={styles.chatsOverviewWrapper__chatCard}
                    onClick={() => handleClickToChat(_id, chatTitle)}
                >
                    <h3>{chatTitle}</h3>
                    <p>{convertDateTime(updatedAt)}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};
