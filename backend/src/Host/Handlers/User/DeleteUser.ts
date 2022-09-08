import { removeUserByUserId } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const DeleteUser = async (req, res, next) => {
    try {
        if (!req.params.userId)
            throw new BadRequestError('UserId not provided!');

        const result = await removeUserByUserId(req.params.userId.toString());

        if (!result.success)
            throw new BadRequestError('User could not be created!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
