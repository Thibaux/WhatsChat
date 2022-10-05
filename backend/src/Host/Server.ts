import completeServer from './App';

/**
 * Start Express server.
 */

const server = completeServer.listen(process.env.PORT, () => {
    console.log('  App is running at http://localhost:%d in %s mode', process.env.PORT, process.env.NODE_ENV);
});

export default server;
