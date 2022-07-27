import { NextFunction, Request, Response } from 'express';
import { getAllChatsByUserName } from '../../../Infrastructure/Database/Controllers';
import BadRequestError from '../../../Infrastructure/Errors/Errors';

export const GetAllChatsOfOneUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.params.username)
            throw new BadRequestError('username not provided!');

        const result = await getAllChatsByUserName(req.params.username);

        if (!result.success)
            throw new BadRequestError('Chats of user could not be found!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
