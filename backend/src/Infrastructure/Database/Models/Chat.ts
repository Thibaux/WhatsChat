import mongoose, { Schema } from 'mongoose';
import { ChatSchema } from '../GlobalInterfaces';

export const chatSchema: Schema = new mongoose.Schema<ChatSchema>(
    {
        chatTitle: {
            type: String,
            required: [true, 'Please provide an chatTitle!'],
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

export const Chat = mongoose.model('Chat', chatSchema);
