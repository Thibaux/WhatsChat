import { Request, Response } from 'express';

export const RouteNotFound = (req: Request, res: Response) => {
    res.status(404).json({
        message: 'Route not found',
    });
};
