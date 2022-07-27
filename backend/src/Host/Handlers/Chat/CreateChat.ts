import { NextFunction, Request, Response } from 'express';
import {
    GetUserByUserId,
    GetUserByUsername,
    saveChat,
    updateUsersWithChat,
} from '../../../Infrastructure/Database/Controllers';
import BadRequestError from '../../../Infrastructure/Errors/Errors';
import { ChatSchema } from '../../../Infrastructure/Database/GlobalInterfaces';

export const CreateChat = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.params.userId)
            throw new BadRequestError('User ID is not provided!');
        if (!req.body.username)
            throw new BadRequestError('Username is not provided!');

        const chatCreator = await GetUserByUserId(req.params.userId);
        const secondUser = await GetUserByUsername(req.body.username);
        const chatTitle = `${chatCreator.username} en ${secondUser.username}`;

        const result = await saveChat({
            chatTitle,
            userOne: chatCreator,
            userTwo: secondUser,
        });

        if (!result.success)
            throw new BadRequestError('Chat could not be created!');

        await updateUsersWithChat(
            [chatCreator.id, secondUser.id],
            result.payload as ChatSchema
        );

        res.status(201).json({ message: 'Chat created!', chat: result });
    } catch (error) {
        next(error);
    }
};
