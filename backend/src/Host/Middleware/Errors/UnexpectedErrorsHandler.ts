const isOperationalError = (error): boolean => error instanceof Error;

export const UnexpectedErrorsHandler = (err, req, res, next) => {
    process.on('unhandledRejection', (err) => {
        throw err;
    });

    process.on('uncaughtException', (err) => {
        console.log(err);

        if (!isOperationalError(err)) {
            process.exit(1);
        }
    });
};
