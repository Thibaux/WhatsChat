import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';
import { getAllMessagesOfChat } from '../../../Infrastructure/Database/Controllers';

export const GetAllMessagesOfChat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllMessagesOfChat(req.params.chatId);

        if (!result.success) throw new BadRequestError('Could not find messages!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
