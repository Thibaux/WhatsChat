import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';
import { postMessageToChat } from '../../../Infrastructure/Database/Controllers';
import { GetUserFromToken } from '../../../Services/Auth';

export const PostMessageToChat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.content || !req.body.chatId) throw new BadRequestError('Content and/or chatId not provided!');

        const authUser = GetUserFromToken(req.headers.authorization);
        const result = await postMessageToChat({
            userId: authUser.userId,
            chatId: req.body.chatId,
            messageContent: req.body.content,
        });

        if (!result.success) throw new BadRequestError('Could not post message!');
        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
