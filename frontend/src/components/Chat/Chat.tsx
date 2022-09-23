import * as React from 'react';
import styles from './chat.module.scss';
import {
    ChatContent,
    ChatHeader,
    ChatInput,
    ChatsOverview,
} from './subComponents';
import { useChatsStore } from '../../store/ChatsStore';

export const Chat = () => {
    const { renderChat } = useChatsStore();

    return (
        <div className={styles.chatAppWrapper}>
            <section className={styles.chatAppWrapper__chatsWrapper}>
                <ChatsOverview />
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
