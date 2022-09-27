export const filterOutLoggedInUser = (
    loggedInUserId: string,
    userIds: string[]
): string => {
    return userIds.filter((userId) => userId !== loggedInUserId)[0];
};
