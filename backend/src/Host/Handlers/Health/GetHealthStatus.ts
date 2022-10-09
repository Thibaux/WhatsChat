import { Request, Response } from 'express';

export const GetHealthStatus = async (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
};
