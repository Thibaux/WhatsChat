import React, { Suspense } from 'react';
import styles from './chatsOverview.module.scss';
import { Header } from '../../../Header/Header';
import { ChatCard } from './subComponents';
import { useChatsOverview } from './useChatsOverview';

export const ChatsOverview = () => {
    const { chats, handleClickToChat, currentChat } = useChatsOverview();

    return (
        <div className={styles.chatsOverviewWrapper}>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <div className={styles.chatsOverviewWrapper__chats}>
                    {chats.map(
                        ({ _id, chatTitle, updatedAt, friendsUsername }) => (
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
                                    chatFriend={friendsUsername}
                                />
                            </div>
                        )
                    )}
                </div>
            </Suspense>
        </div>
    );
};
