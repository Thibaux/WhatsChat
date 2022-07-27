import { HydratedDocument, QueryWithHelpers, Types } from 'mongoose';
import { ChatSchema, MongoUser, UserSchema } from '../GlobalInterfaces';
import { Chat } from '../Models/Chat';
import { User } from '../Models/User';

interface SaveChatReturnI {
    success: boolean;
    payload: HydratedDocument<ChatSchema> | string;
}

export const saveChat = async ({
    chatTitle,
    userOne,
    userTwo,
}: {
    chatTitle: string;
    userOne: MongoUser;
    userTwo: MongoUser;
}): Promise<SaveChatReturnI> => {
    const chat = new Chat({
        chatTitle,
        userOne,
        userTwo,
    }) as HydratedDocument<ChatSchema>;

    try {
        await chat.save();
        return {
            success: true,
            payload: chat,
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};

export const updateUsersWithChat = async (
    userIds: Types.ObjectId[],
    chat: ChatSchema
) => {
    for (const id of userIds) {
        await User.updateOne(
            { _id: id },
            // @ts-ignore
            { $push: { chats: chat } }
        );
    }
};

export const GetUserByUsername = async (
    username: string
): Promise<HydratedDocument<MongoUser>> => {
    const user = await User.find({ username });

    return user[0] as HydratedDocument<MongoUser>;
};

export const GetUserByUserId = async (
    userId: string
): Promise<HydratedDocument<MongoUser>> => {
    const user = await User.findById(userId);

    return user as HydratedDocument<MongoUser>;
};

interface GetAllChatsByUserNameReturnI {
    success: boolean;
    payload: any | string;
}

export const getAllChatsByUserName = async (
    username: string
): Promise<GetAllChatsByUserNameReturnI> => {
    try {
        return {
            success: true,
            payload: await User.find({ username }).populate('chats'),
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};
