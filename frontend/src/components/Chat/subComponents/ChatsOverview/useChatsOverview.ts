import { useEffect, useMemo, useState } from 'react';
import { useChatsStore } from '../../../../store/ChatsStore';
import { useUserStore } from '../../../../store/UserStore';

import { getFriendsUsername } from '../../../../utils/converting/getFriendsUsername';

export const useChatsOverview = (chats: Chat[]) => {
    const { setRenderChat, currentChat } = useChatsStore();
    const { userObject, users, getAllUsers } = useUserStore();
    const [chatsWithFriendsUsername, setChatsWithFriendsUsername] = useState(
        [] as Chat[]
    );

    const handleClickToChat = (chatId: string, chatTitle: string) => {
        setRenderChat({ showChat: true, chatId, chatTitle });
    };

    const appendFriendsUsernameToChatArray = (): Chat[] => {
        console.log(chats);
        const updatedChats: Chat[] = [...chats];
        console.log(updatedChats);

        for (let i = 0; i < updatedChats.length; i++) {
            const u = getFriendsUsername({
                userObject,
                chatUsers: updatedChats[i].users,
                users,
            });

            updatedChats[i] = {
                ...updatedChats[i],
                friendsUsername: u,
            };
        }

        return updatedChats;
    };

    useEffect(() => {
        getAllUsers();

        const f = appendFriendsUsernameToChatArray();
        setChatsWithFriendsUsername(f);
    }, []);

    // const ff = useMemo(() => appendFriendsUsernameToChatArray(), [chats]);
    // setChatsWithFriendsUsername(ff);

    return { chatsWithFriendsUsername, handleClickToChat, currentChat, users };
};
