import * as mongoose from 'mongoose';

export type BasicProperyType = {
  type: string;
  required: [boolean, string];
  unique: [boolean, string];
};

export interface UserSchema extends mongoose.Document {
  username: BasicProperyType;
  email: BasicProperyType;
  password: BasicProperyType;
  picture: BasicProperyType;
}

export interface ChatSchema extends Document {
  chatTitle: BasicProperyType;
  userOne: MongoUser;
  userTwo: MongoUser;
}

export type MongoUser = {
  _id: string;
  username: string;
};
