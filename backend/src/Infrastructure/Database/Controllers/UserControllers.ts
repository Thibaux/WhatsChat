import { HydratedDocument } from 'mongoose';
import { userModel } from '../Models/UserModel';
import { UserSchema } from '../GlobalInterfaces';

export const saveUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<HydratedDocument<UserSchema> | string> => {
  const user = new userModel({
    username,
    password,
  }) as HydratedDocument<UserSchema>;

  try {
    await user.save();
    return user;
  } catch (e) {
    return e.message;
  }
};

export const getAllUsers = async () => {
  try {
    return await userModel.find({});
  } catch (e) {
    return e.message;
  }
};
