import mongoose, { Schema } from 'mongoose';
import { UserSchema } from '../GlobalInterfaces';

export const userSchema: Schema = new mongoose.Schema<UserSchema>(
    {
        username: {
            type: String,
            required: [true, 'Please provide an username!'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email!'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please provide a password!'],
            unique: false,
        },
        picture: {
            type: String,
            required: [false, ''],
            default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
