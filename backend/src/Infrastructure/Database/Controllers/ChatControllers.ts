import { HydratedDocument, Types } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';
import { ChatSchema, MongoUser, UserSchema } from '../GlobalInterfaces';
import { Chat } from '../Models/Chat';
import { User } from '../Models/User';
import { findOneUserById } from './UserControllers';

interface CreateChatReturnI {
    success: boolean;
    payload: any | string;
}

export const createChat = async (
    chatTitle: string,
    userTwoId: string,
    currentUser: JwtPayload
): Promise<CreateChatReturnI> => {
    try {
        const usernameOfUserTwo = findOneUserById(userTwoId);
        const title =
            chatTitle && `${usernameOfUserTwo} en ${currentUser.name}`;

        const createdChat = await Chat.create({
            chatTitle: title,
            groupAdmin: currentUser.name,
            users: [userTwoId, currentUser.userId],
        });

        const fullChat = await Chat.findOne({
            _id: createdChat.id,
        }).populate('users', '-password');

        return {
            success: true,
            payload: fullChat,
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
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
interface RemoveChatByUserIdReturnI {
    success: boolean;
    payload: HydratedDocument<UserSchema> | string;
}

export const removeChatByUserId = async (
    chatId: string
): Promise<RemoveChatByUserIdReturnI> => {
    try {
        return {
            success: true,
            payload: await Chat.find({ _id: chatId }).deleteOne().exec(),
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};
