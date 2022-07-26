import { NextFunction, Request, Response } from 'express';
import { getAllUsersOrSearch } from '../../../Infrastructure/Database/Controllers';

export const GetAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await getAllUsersOrSearch(req.query.search.toString());

        if (typeof result === 'string') {
            res.status(400).json({ error: result });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        next(error);
    }
};
