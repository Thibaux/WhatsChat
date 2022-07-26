import { NextFunction, Request, Response } from 'express';
import { getAllChatsByUserName } from '../../../Infrastructure/Database/Controllers';

export const GetAllChatsOfOneUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.params.username)
            res.status(400).send({ error: 'Username is not provided!' });

        const result = await getAllChatsByUserName(req.params.username);

        if (typeof result === 'string') {
            res.status(400).json({ error: result });
        } else {
            res.status(200).json({ chats: result });
        }
    } catch (error) {
        next(error);
    }
};
