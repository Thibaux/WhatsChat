import * as React from 'react';
import styles from './chat.module.scss';
import { ChatContent } from './subComponents/ChatContent/ChatContent';
import { ChatHeader } from './subComponents/ChatHeader/ChatHeader';
import { ChatInput } from './subComponents/ChatInput/ChatInput';
import { ChatsOverview } from './subComponents/ChatsOverview/ChatsOverview';

export const Chat = () => {
    return (
        <div className={styles.chatAppWrapper}>
            <section className={styles.chatsWrapper}>
                <ChatsOverview />
            </section>
            <div className={styles.middleSection}>
                <section className={styles.chatWrapper__headerWrapper}>
                    <ChatHeader />
                </section>
                <section className={styles.chatWrapper__contentWrapper}>
                    <ChatContent />
                </section>
                <section className={styles.chatWrapper__intputWrapper}>
                    <ChatInput />
                </section>
            </div>
        </div>
    );
};
