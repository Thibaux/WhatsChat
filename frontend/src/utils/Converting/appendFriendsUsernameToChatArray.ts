import { getFriendsUsername } from './Users/GetFriendsUsername/getFriendsUsername';

interface AppendFriendsUsernameToChatArrayInterface {
    chats: Chat[];
    userObject: UserObject;
    users: UserObject[];
}

export const appendFriendsUsernameToChatArray = ({
    chats,
    userObject,
    users,
}: AppendFriendsUsernameToChatArrayInterface): Chat[] => {
    const updatedChats: Chat[] = [...chats];

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
