import { GetUserFromToken } from '../../../Services/Auth/GetUserFromToken';
import { getChatsByUserId } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const GetChatsFromUser = async (req, res, next) => {
    try {
        const authUser = GetUserFromToken(req.headers.authorization);

        const result = await getChatsByUserId(authUser.userId);

        if (!result.success)
            throw new BadRequestError('Chats of user could not be found!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
