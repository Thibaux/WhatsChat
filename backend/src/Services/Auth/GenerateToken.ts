import jwt from 'jsonwebtoken';

export const generateToken = (id: string): string =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
