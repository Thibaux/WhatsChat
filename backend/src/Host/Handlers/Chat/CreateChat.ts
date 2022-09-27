import { NextFunction, Request, Response } from 'express';
import { Chat } from '../../../Infrastructure/Database/Models/Chat';
import { GetUserFromToken } from '../../../Services/Auth/GetUserFromToken';
import { createChat } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const CreateChat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.userId) throw new BadRequestError('User ID is not provided!');

        const authUser = GetUserFromToken(req.headers.authorization);

        // check if a chat exists with these users and with the provided title
        const chats = await Chat.find({
            $and: [
                {
                    $or: [
                        { users: { $elemMatch: { $eq: req.body.userId } } },
                        { users: { $elemMatch: { $eq: authUser.userId } } },
                    ],
                },
                {
                    $or: [{ chatTitle: { $regex: req.body.chatTitle } }],
                },
            ],
        }).populate('users', '-password');

        if (chats.length > 0) {
            res.status(400).json({
                message: 'Chat already exists!',
                chat: chats[0],
            });
        } else {
            const result = await createChat(req.body.chatTitle, req.body.userId, authUser);
            if (!result.success) throw new BadRequestError(`Chat could not be created!`, result.payload);

            res.status(201).json({
                message: 'Chat created!',
                chat: result.payload,
            });
        }
    } catch (error) {
        next(error);
    }
};
