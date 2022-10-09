import { NextFunction, Request, Response } from 'express';
import { hashPassword } from '../../../Services/Auth';
import { saveUser } from '../../../Infrastructure/Database/Controllers';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const CreateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.email)
            throw new BadRequestError('Username, email or password not provided!');

        const hash = await hashPassword(req.body.password);

        const result = await saveUser({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        if (!result.success) {
            throw new BadRequestError('User could not be created!', result.payload);
        }

        res.status(201).send({
            message: 'User created!',
            username: req.body.username,
            id: result.payload['id'],
        });
    } catch (error) {
        next(error);
    }
};
