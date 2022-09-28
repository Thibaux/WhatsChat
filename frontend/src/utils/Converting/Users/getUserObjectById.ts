export const getUserObjectById = (
    userId: string,
    users: UserObject[]
): UserObject => {
    return users.filter((user: UserObject) => user._id === userId)[0];
};
