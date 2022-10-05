export const filterOutLoggedInUser = (
    loggedInUserId: string,
    userIds: string[]
): string => {
    return userIds.filter((userId: string) => userId !== loggedInUserId)[0];
};
