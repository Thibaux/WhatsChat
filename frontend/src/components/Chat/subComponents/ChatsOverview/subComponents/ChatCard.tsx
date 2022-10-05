import React from 'react';
import styles from './chatCard.module.scss';
import { convertDateTime } from '../../../../../utils/Converting';

interface ChatCardInterface {
    chatId: string;
    handleClickToChat: (chatId: string, chatTitle: string) => void;
    chatTitle: string;
    updatedAt: string;
    chatFriend: string | undefined;
}

export const ChatCard = ({
    chatId,
    handleClickToChat,
    chatTitle,
    updatedAt,
    chatFriend,
}: ChatCardInterface) => {
    return (
        <div
            id={chatId}
            key={chatId}
            className={styles.chatCardWrapper}
            onClick={() => handleClickToChat(chatId, chatTitle)}
        >
            <div className={styles.chatCardWrapper__header}>
                <h3>{chatTitle}</h3>
                <p>{chatFriend}</p>
            </div>
            <p>{convertDateTime(updatedAt)}</p>
            <hr />
        </div>
    );
};
