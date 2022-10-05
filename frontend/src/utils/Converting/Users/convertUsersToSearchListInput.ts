export const convertUsersToSearchListInput = (inputUsers: UserObject[]) => {
    const searchList: SearchListInput[] = [];

    inputUsers.forEach((user: UserObject) => {
        searchList.push({ value: user._id, label: user.username });
    });

    return searchList;
};
