require('dotenv').config();
const createServer = require('./createServer');
const server = createServer();

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, (DEETS) => {
    console.log('server is running on ', `http://localhost:${DEETS.port}`)
})
