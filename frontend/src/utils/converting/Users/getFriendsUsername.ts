import { filterOutLoggedInUser } from './filterOutLoggedInUser';
import { getUserObjectById } from './getUserObjectById';

interface GetFriendsUsernameInterface {
    userObject: UserObject;
    chatUsers: string[];
    users: UserObject[];
}

export const getFriendsUsername = ({
    userObject,
    chatUsers,
    users,
}: GetFriendsUsernameInterface): string => {
    const friendsId = filterOutLoggedInUser(userObject._id, chatUsers);
    const friendsUserObject = getUserObjectById(friendsId, users);

    return friendsUserObject.username;
};
