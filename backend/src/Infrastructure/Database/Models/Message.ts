import mongoose, { Schema } from 'mongoose';
import { MessageSchema } from '../GlobalInterfaces';

const messageModel: Schema = new mongoose.Schema<MessageSchema>({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: { type: String, trim: true },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    },
});

export const Message = mongoose.model('Message', messageModel);
