import * as React from 'react';
import { useEffect } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import styles from './chatsOverview.module.scss';

export const ChatsOverview = () => {
    const { chats, setChats } = useChatsStore();

    useEffect(() => {
        setChats();
    });

    console.log(chats);

    if (!chats) return null;
    return (
        <div className={styles.contentWrapper}>
            {chats.map(({ _id, chatTitle, updatedAt }) => (
                <div id={String(_id)} key={_id}>
                    {chatTitle} - {updatedAt}
                </div>
            ))}
        </div>
    );
};
