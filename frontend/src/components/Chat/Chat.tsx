import * as React from 'react';
import styles from './chat.module.scss';
import {
    ChatContent,
    ChatHeader,
    ChatInput,
    ChatsOverview,
} from './subComponents';

export const Chat = () => {
    return (
        <div className={styles.chatAppWrapper}>
            <section className={styles.chatsWrapper}>
                <ChatsOverview />
            </section>
            <div className={styles.chatAppWrapper__middleSection}>
                <section className={styles.chatAppWrapper__headerWrapper}>
                    <ChatHeader />
                </section>
                <section className={styles.chatAppWrapper__contentWrapper}>
                    <ChatContent />
                </section>
                <section className={styles.chatAppWrapper__inputWrapper}>
                    <ChatInput />
                </section>
            </div>
        </div>
    );
};
