import { NextFunction, Request, Response } from 'express';
import { removeUserByUserId } from '../../../Infrastructure/Database/Controllers';

export const DeleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.params.userId) {
            res.status(400).json({
                error: 'User id not provided!',
            });
        }

        const result = await removeUserByUserId(req.params.userId.toString());

        if (typeof result !== 'string') {
            res.status(200).json(result);
        } else {
            res.status(400).json({ error: result });
        }
    } catch (error) {
        next(error);
    }
};
