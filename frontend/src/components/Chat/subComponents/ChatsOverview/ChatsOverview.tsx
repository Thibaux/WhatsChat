import React, { Suspense } from 'react';
import styles from './chatsOverview.module.scss';
import { useChatsOverview } from './useChatsOverview';
import { Header } from '../../../Header/Header';
import { ChatCard } from './subComponents';

export const ChatsOverview = () => {
    const { chats, handleClickToChat, currentChat } = useChatsOverview();

    return (
        <div className={styles.chatsOverviewWrapper}>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                {chats.map(({ _id, chatTitle, updatedAt }) => (
                    <div
                        key={_id}
                        style={
                            currentChat.chatId === _id
                                ? { backgroundColor: 'lightgrey' }
                                : {}
                        }
                    >
                        <ChatCard
                            chatId={_id}
                            handleClickToChat={handleClickToChat}
                            chatTitle={chatTitle}
                            updatedAt={updatedAt}
                        />
                    </div>
                ))}
            </Suspense>
        </div>
    );
};
