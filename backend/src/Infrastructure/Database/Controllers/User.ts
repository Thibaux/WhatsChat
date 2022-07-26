import { HydratedDocument } from 'mongoose';
import { userModel } from '../Models/User';
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
