import { Message } from '../Models/Message';
import { User } from '../Models/User';

interface GetAllMessagesOfChatReturnI {
    success: boolean;
    payload: any | string;
}

export const getAllMessagesOfChat = async (chatId: string): Promise<GetAllMessagesOfChatReturnI> => {
    try {
        return {
            success: true,
            payload: await Message.find({ chat: chatId }).populate('sender', 'username picture email').populate('chat'),
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};

interface PostMessageToChatReturnI {
    success: boolean;
    payload: any | string;
}

export const postMessageToChat = async ({
    userId,
    chatId,
    messageContent,
}: {
    userId: string;
    chatId: string;
    messageContent: string;
}): Promise<PostMessageToChatReturnI> => {
    try {
        let message = await Message.create({
            sender: userId,
            content: messageContent,
            chat: chatId,
        });

        message = await message.populate('sender', 'username picture');
        message = await message.populate('chat');
        message = await User.populate(message, {
            path: 'chat.users',
            select: 'username picture email',
        });

        return {
            success: true,
            payload: message,
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};
