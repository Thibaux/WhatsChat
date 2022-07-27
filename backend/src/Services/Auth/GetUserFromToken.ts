import jwt, { JwtPayload } from 'jsonwebtoken';

export const GetUserFromToken = (token: string): JwtPayload => {
    const tokenString = token.split(' ')[1];
    return <JwtPayload>jwt.verify(tokenString, process.env.JWT_SECRET);
};
