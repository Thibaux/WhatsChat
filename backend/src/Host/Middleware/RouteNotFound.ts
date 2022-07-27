export const RouteNotFound = (req, res, next) => {
    res.status(404).json({
        message: 'Route not found',
    });
};
