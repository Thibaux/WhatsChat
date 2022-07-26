import mongoose, { Schema } from 'mongoose';
import { ChatSchema } from '../GlobalInterfaces';

export const chatSchema: Schema = new mongoose.Schema<ChatSchema>({
  chatTitle: {
    type: String,
    required: [true, 'Please provide an chatTitle!'],
    unique: [true, 'username exist'],
  },
  userOne: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  userTwo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const chatModel = mongoose.model('Chat', chatSchema);
