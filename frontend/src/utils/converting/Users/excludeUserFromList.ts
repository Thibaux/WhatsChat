export const excludeUserFromList = (
    allUsers: UserObject[],
    loggedInUser: UserObject
): UserObject[] => allUsers.filter((user) => user._id !== loggedInUser._id);
