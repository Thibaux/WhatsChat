import React from 'react';
import styles from '../chatsOverview.module.scss';
import { convertDateTime } from '../../../../../utils/converting';

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
            className={styles.chatsOverviewWrapper__chatCard}
            onClick={() => handleClickToChat(chatId, chatTitle)}
        >
            <h3>{chatTitle}</h3>
            <p>{convertDateTime(updatedAt)}</p>
            <p>{chatFriend}</p>
            <hr />
        </div>
    );
};
