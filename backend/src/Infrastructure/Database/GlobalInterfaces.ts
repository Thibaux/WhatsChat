import * as mongoose from 'mongoose';

export type BasicPropertyType = {
    type: string;
    required: [boolean, string];
    unique: [boolean, string];
};

export interface UserSchema extends mongoose.Document {
    username: BasicPropertyType;
    email: BasicPropertyType;
    password: BasicPropertyType;
    picture: BasicPropertyType;
}

export interface ChatSchema extends Document {
    chatTitle: BasicPropertyType;
    users: BasicPropertyType[];
    groupAdmin: BasicPropertyType;
}

export type MongoUser = {
    _id: string;
    username: string;
};
