require('dotenv').config(); //allows to inject fake env vars
// const PORT = process.env.PORT || 5000;
const { PORT } = require('./config');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.send(`
    <h1>Mod 4 Project</h1>`)
})

server.use('*', (req, res) => {
    res.json({
        message: 'web 44 is awsome indeed'
    })
})

server.listen(PORT, () => { //heroku machine uses a different port
    console.log(`listening on ${PORT}`)
});

