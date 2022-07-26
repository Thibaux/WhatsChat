import { HydratedDocument } from 'mongoose';
import { userModel } from '../Models/UserModel';
import { UserSchema } from '../GlobalInterfaces';

export const saveUser = async ({
    username,
    email,
    password,
}: {
    username: string;
    email: string;
    password: string;
}): Promise<HydratedDocument<UserSchema> | string> => {
    const user = new userModel({
        username,
        email,
        password,
    }) as HydratedDocument<UserSchema>;

    try {
        await user.save();
        return user;
    } catch (e) {
        return e.message;
    }
};

export const getAllUsersOrSearch = async (searchQuery: string) => {
    try {
        let users;

        if (searchQuery) {
            users = await userModel.find({ username: searchQuery });
        } else {
            users = await userModel.find({});
        }

        return users;
    } catch (e) {
        return e.message;
    }
};
