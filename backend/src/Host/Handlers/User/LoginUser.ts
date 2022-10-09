import { NextFunction, Request, Response } from 'express';
import { findOneUserByEmail } from '../../../Infrastructure/Database/Controllers';
import { generateToken, matchPassword } from '../../../Services/Auth';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const LoginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let returnObject;

        if (!req.body.email || !req.body.password) throw new BadRequestError('Email and/or password is not provided!');

        const result = await findOneUserByEmail(req.body.email);

        if (!result) throw new BadRequestError('User not found!');

        if (await matchPassword(result.password, req.body.password)) {
            returnObject = {
                _id: result.id,
                username: result.username,
                email: result.email,
                picture: result.picture,
                token: generateToken(result.id, result.username),
            };
        } else {
            throw new BadRequestError('Wrong password provided for this user!');
        }

        res.status(200).json(returnObject);
    } catch (e) {
        next(e);
    }
};
