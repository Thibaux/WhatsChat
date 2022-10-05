export const excludeUserFromList = (
    allUsers: UserObject[],
    loggedInUser: UserObject
): UserObject[] =>
    allUsers.filter((user: UserObject) => user._id !== loggedInUser._id);
