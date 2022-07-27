import { HydratedDocument, Types } from 'mongoose';
import { ChatSchema, MongoUser } from '../GlobalInterfaces';
import { Chat } from '../Models/Chat';
import { User } from '../Models/User';

export const saveChat = async ({
    chatTitle,
    userOne,
    userTwo,
}: {
    chatTitle: string;
    userOne: MongoUser;
    userTwo: MongoUser;
}): Promise<HydratedDocument<ChatSchema> | string> => {
    const chat = new Chat({
        chatTitle: chatTitle,
        userOne,
        userTwo,
    }) as HydratedDocument<ChatSchema>;

    try {
        await chat.save();
        return chat;
    } catch (e) {
        return e.message;
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
    const user = await User.find({ username: username });

    return user[0] as HydratedDocument<MongoUser>;
};

export const GetUserByUserId = async (
    userId: string
): Promise<HydratedDocument<MongoUser>> => {
    const user = await User.findById(userId);

    return user as HydratedDocument<MongoUser>;
};

export const getAllChatsByUserName = async (username: string): Promise<any> => {
    try {
        return await User.find({ username: username }).populate('chats');
    } catch (e) {
        return e.message;
    }
};
