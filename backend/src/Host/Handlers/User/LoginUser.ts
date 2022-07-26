import { NextFunction, Request, Response } from 'express';
import {
    checkPasswordUser,
    findOneUser,
} from '../../../Infrastructure/Database/Controllers';
import { generateToken } from '../../../Services/Utils/GenerateToken';

export const LoginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let user;

        if (!req.body.email || !req.body.password)
            res.status(400).send({
                error: 'Email and/or password is not provided!',
            });

        const result = await findOneUser(req.body.email);

        if (!result)
            res.status(400).send({
                error: 'User could not be found!',
            });

        if (result && (await checkPasswordUser(user, req.body.password))) {
            user = {
                _id: result._id,
                username: result.name,
                email: result.email,
                picture: result.pic,
                token: generateToken(result.id),
            };
        }

        if (typeof result !== 'string') {
            res.status(200).json(user);
        } else {
            res.status(400).json({ error: user });
        }
    } catch (error) {
        next(error);
    }
};
