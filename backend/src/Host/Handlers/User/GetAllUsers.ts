import { NextFunction, Request, Response } from 'express';
import { getAllUsersOrSearch } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const GetAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await getAllUsersOrSearch(req.query.search.toString());

        if (!result.success)
            throw new BadRequestError('username not provided!');

        res.status(200).json(result.payload);
    } catch (error) {
        next(error);
    }
};
