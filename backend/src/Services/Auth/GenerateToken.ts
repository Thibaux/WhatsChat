import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, username: string): string =>
    jwt.sign({ userId, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
