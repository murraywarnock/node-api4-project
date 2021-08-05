require('dotenv').config(); 

const { PORT } = require('./config');
const server = require('./api/server');
// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');

// const server = express();

// server.use(express.json());
// server.use(cors());
// server.use(helmet());

// server.get('/', (req, res) => {
//     res.send(`
//     <h1>Mod 4 Project</h1>`)
// })

// server.use('*', (req, res) => {
//     res.json({
//         message: 'web 44 is awsome indeed'
//     })
// })

server.listen(PORT, () => { 
    console.log(`listening on ${PORT}`)
});

