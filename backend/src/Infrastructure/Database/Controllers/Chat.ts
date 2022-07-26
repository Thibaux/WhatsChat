import { HydratedDocument, Types } from 'mongoose';
import { ChatSchema, MongoUser } from '../GlobalInterfaces';
import { chatModel } from '../Models/Chat';
import { userModel } from '../Models/User';

export const saveChat = async ({
  chatTitle,
  userOne,
  userTwo,
}: {
  chatTitle: string;
  userOne: MongoUser;
  userTwo: MongoUser;
}): Promise<HydratedDocument<ChatSchema> | string> => {
  const chat = new chatModel({
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
    await userModel.updateOne(
      { _id: id },
      // @ts-ignore
      { $push: { chats: chat } }
    );
  }
};

export const GetUserByUsername = async (
  username: string
): Promise<HydratedDocument<MongoUser>> => {
  const user = await userModel.find({ username: username });

  return user[0] as HydratedDocument<MongoUser>;
};

export const GetUserByUserId = async (
  userId: string
): Promise<HydratedDocument<MongoUser>> => {
  const user = await userModel.findById(userId);

  return user as HydratedDocument<MongoUser>;
};

export const getAllChatsByUserName = async (username: string): Promise<any> => {
  try {
    return await userModel.find({ username: username }).populate('chats');
  } catch (e) {
    return e.message;
  }
};
