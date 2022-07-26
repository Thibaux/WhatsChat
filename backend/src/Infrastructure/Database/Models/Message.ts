import mongoose, { Schema } from 'mongoose';
import { ChatSchema } from '../GlobalInterfaces';

  export const messageSchema: Schema = new mongoose.Schema<MessageSchema>(
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
