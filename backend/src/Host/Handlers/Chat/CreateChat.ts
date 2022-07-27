import { NextFunction, Request, Response } from 'express';
import BadRequestError from '../../../Infrastructure/Errors/Errors';
import { Chat } from '../../../Infrastructure/Database/Models/Chat';
import { GetUserFromToken } from '../../../Services/Auth/GetUserFromToken';
import { createChat } from '../../../Infrastructure/Database/Controllers';

export const CreateChat = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.body.userId)
            throw new BadRequestError('User ID is not provided!');

        const authUser = GetUserFromToken(req.headers.authorization);

        const isChat = await Chat.find({
            $and: [
                { users: { $elemMatch: { $eq: req.body.userId } } },
                { users: { $elemMatch: { $eq: authUser.userId } } },
            ],
        }).populate('users', '-password');

        if (isChat.length > 0) {
            res.status(200).json({
                message: 'Chat already exists!',
                chat: isChat[0],
            });
        } else {
            const result = await createChat(
                req.body.chatTitle,
                req.body.userId,
                authUser
            );

            if (result.success) {
                res.status(201).json({
                    message: 'Chat created!',
                    chat: result.payload,
                });
            }

            if (!result.success)
                throw new BadRequestError(
                    `Chat could not be created!`,
                    result.payload
                );
        }
    } catch (error) {
        next(error);
    }
};
