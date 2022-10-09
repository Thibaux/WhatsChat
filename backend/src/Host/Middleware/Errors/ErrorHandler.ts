import { UnauthorizedError } from '../../../Infrastructure/Errors/UnauthorizedError';
import { BadRequestError } from '../../../Infrastructure/Errors/BadRequestError';

export const ErrorHandler = (err, req, res, next) => {
    if (err instanceof BadRequestError) {
        res.status(400).json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    } else if (err instanceof UnauthorizedError) {
        res.status(401).json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    } else if ([400, 404].includes(err.response.status)) {
        // pass along the error from a backend system
        res.status(err.response.status).json({
            message: err.message,
            error: err.response.data,
        });
    } else {
        res.status(500).json({
            message: err.message,
            error: 'Internal API error',
        });
    }
};
