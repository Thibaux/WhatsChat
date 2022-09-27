import React, { Suspense, useEffect } from 'react';
import styles from './chat.module.scss';
import {
    ChatContent,
    ChatHeader,
    ChatInput,
    ChatsOverview,
} from './subComponents';
import { useChatsStore } from '../../store/ChatsStore';

export const Chat = () => {
    const { renderChat, chats, getChats } = useChatsStore();

    useEffect(() => {
        getChats();
    }, []);

    return (
        <div className={styles.chatAppWrapper}>
            <section className={styles.chatAppWrapper__chatsWrapper}>
                <Suspense fallback={<p>Loading...</p>}>
                    <ChatsOverview chats={chats} />
                </Suspense>
            </section>
            <div className={styles.chatAppWrapper__middleSection}>
                <section className={styles.chatAppWrapper__headerWrapper}>
                    <ChatHeader />
                </section>
                <section className={styles.chatAppWrapper__contentWrapper}>
                    {renderChat && <ChatContent />}
                </section>
                <section className={styles.chatAppWrapper__inputWrapper}>
                    <ChatInput />
                </section>
            </div>
        </div>
    );
};
