import { NextFunction, Request, Response } from 'express';
import { removeUserByUserId } from '../../../Infrastructure/Database/Controllers';
import BadRequestError from '../../../Infrastructure/Errors/Errors';

export const DeleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
