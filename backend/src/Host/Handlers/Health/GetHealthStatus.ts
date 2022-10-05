export const GetHealthStatus = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        next(error);
    }
};
