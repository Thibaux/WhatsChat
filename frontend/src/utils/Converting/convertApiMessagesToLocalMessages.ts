export const convertApiMessagesToLocalMessages = (
    apiMessages: Message[]
): LocalMessages[] => {
    const localMessages: LocalMessages[] = [];

    apiMessages.forEach((message) => {
        localMessages.push({
            userId: message.sender._id,
            username: message.sender.username,
            message: message.content,
        });
    });

    return localMessages;
};
