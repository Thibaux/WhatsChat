import { HydratedDocument } from 'mongoose';
import { User } from '../Models/User';
import { UserSchema } from '../GlobalInterfaces';

interface SaveUserReturnI {
    success: boolean;
    payload: HydratedDocument<UserSchema> | string;
}

export const saveUser = async ({
    username,
    email,
    password,
}: {
    username: string;
    email: string;
    password: string;
}): Promise<SaveUserReturnI> => {
    const user = new User({
        username,
        email,
        password,
    }) as HydratedDocument<UserSchema>;

    try {
        await user.save();
        return {
            success: true,
            payload: user,
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};

interface GetAllUsersOrSearchReturnI {
    success: boolean;
    payload: HydratedDocument<UserSchema> | string;
}
export const getAllUsersOrSearch = async (searchQuery: string): Promise<GetAllUsersOrSearchReturnI> => {
    try {
        let users;

        if (searchQuery) {
            users = await User.find({ username: searchQuery });
        } else {
            users = await User.find({});
        }

        return {
            success: true,
            payload: users,
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};

interface RemoveUserByUserIdReturnI {
    success: boolean;
    payload: HydratedDocument<UserSchema> | string;
}

export const removeUserByUserId = async (userId: string): Promise<RemoveUserByUserIdReturnI> => {
    try {
        return {
            success: true,
            payload: await User.find({ _id: userId }).deleteOne().exec(),
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};

export const findOneUserByEmail = async (email: string) => {
    return User.findOne({ email });
};

interface FindOneUserByIdReturnI {
    success: boolean;
    payload: HydratedDocument<UserSchema> | string;
}

export const findOneUserById = async (id: string): Promise<FindOneUserByIdReturnI> => {
    try {
        return {
            success: true,
            payload: await User.findOne({ id }),
        };
    } catch (e) {
        return {
            success: false,
            payload: e.message,
        };
    }
};
