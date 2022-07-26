import { HydratedDocument } from 'mongoose';
import { User } from '../Models/User';
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
    const user = new User({
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
            users = await User.find({ username: searchQuery });
        } else {
            users = await User.find({});
        }

        return users;
    } catch (e) {
        return e.message;
    }
};

export const removeUserByUserId = async (userId: string) => {
    try {
        return await User.find({ _id: userId }).deleteOne().exec();
    } catch (e) {
        return e.message;
    }
};

export const findOneUser = async (email: string) => {
    try {
        return await User.findOne({ email });
    } catch (e) {
        return e.message;
    }
};

export const checkPasswordUser = async (user, password: string) => {
    try {
        return await user.matchPassword(password);
    } catch (e) {
        return e.message;
    }
};
