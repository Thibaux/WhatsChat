import { NextFunction, Request, Response } from 'express';
import {
    GetUserByUserId,
    GetUserByUsername,
    saveChat,
    updateUsersWithChat,
} from '../../../Infrastructure/Database/Controllers';

export const createChat = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.params.userId)
            res.status(400).send({ error: 'User ID is not provided!' });
        if (!req.body.username)
            res.status(400).send({ error: 'Username is not provided!' });

        const chatCreator = await GetUserByUserId(req.params.userId);
        const secondUser = await GetUserByUsername(req.body.username);

        const chatTitle = `${chatCreator.username} en ${secondUser.username}`;

        const result = await saveChat({
            chatTitle,
            userOne: chatCreator,
            userTwo: secondUser,
        });

        if (typeof result !== 'string') {
            await updateUsersWithChat(
                [chatCreator._id, secondUser._id],
                result
            );

            res.status(201).json({ message: 'Chat created!', chat: result });
        } else {
            res.status(400).json({ error: result });
        }
    } catch (error) {
        next(error);
    }
};
