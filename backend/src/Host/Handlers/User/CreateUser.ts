import { NextFunction, Request, Response } from 'express';
import { hashPassword } from '../../../Services/Utils/HashPassword';
import { saveUser } from '../../../Infrastructure/Database/Controllers';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.send({ error: 'Username or password not provided!' });
    }

    const hash = await hashPassword(req.body.password);

    const result = await saveUser({
      username: req.body.username,
      password: hash,
    });

    if (typeof result === 'string') {
      res.status(400).json({ error: result });
    } else {
      res.status(201).send({
        message: 'User created!',
        username: req.body.username,
        id: result._id,
      });
    }
  } catch (error) {
    next(error);
  }
};
