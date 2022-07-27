import { removeChatByUserId } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const DeleteChat = async (req, res, next) => {
    try {
        if (!req.params.chatId)
            throw new BadRequestError('ChatId not provided!');

        const result = await removeChatByUserId(req.params.chatId);

        if (!result.success)
            throw new BadRequestError('User could not be created!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
