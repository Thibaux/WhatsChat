import mongoose, { Schema } from 'mongoose';
import { UserSchema } from '../GlobalInterfaces';

export const userSchema: Schema = new mongoose.Schema<UserSchema>(
  {
    username: {
      type: String,
      required: [true, 'Please provide an username!'],
      unique: [true, 'username exist'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password!'],
      unique: false,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model('User', userSchema);
