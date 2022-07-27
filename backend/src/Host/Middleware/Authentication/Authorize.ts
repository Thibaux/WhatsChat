import { UnauthorizedError } from '../../../Infrastructure/Errors/UnauthorizedError';
import { GetUserFromToken } from '../../../Services/Auth/GetUserFromToken';
import { findOneUserById } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const Authorize = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            next();
        }
        const decodedToken = GetUserFromToken(req.headers.authorization);
        const result = await findOneUserById(decodedToken.userId);

        if (result.success) {
            next();
        } else {
            throw new BadRequestError('User not found!');
        }
    } catch (error) {
        throw new UnauthorizedError('Not authenticated!');
    }
};
