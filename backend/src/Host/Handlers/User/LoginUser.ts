import { NextFunction, Request, Response } from 'express';
import { findOneUserByEmail } from '../../../Infrastructure/Database/Controllers';
import { generateToken } from '../../../Services/Auth/GenerateToken';
import { matchPassword } from '../../../Services/Auth/MatchPassword';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const LoginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let returnObject;

        if (!req.body.email || !req.body.password)
            throw new BadRequestError('Email and/or password is not provided!');

        const result = await findOneUserByEmail(req.body.email);

        if (!result)
            res.status(400).send({
                error: 'User could not be found!',
            });

        if (await matchPassword(result.password, req.body.password)) {
            returnObject = {
                _id: result.id,
                username: result.name,
                email: result.email,
                picture: result.pic,
                token: generateToken(result.id),
            };
        } else {
            throw new BadRequestError('Wrong password provided for this user!');
        }

        res.status(200).json(returnObject);
    } catch (error) {
        next(error);
    }
};
