const express = require('express');
const helmet = require('helmet');
const userRouter = require('./user-router.js');

const server = express();

server.use(express.json());
server.use(helmet()); 
server.use('/api/', (req, res, next) => {next()}, userRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h1>Module 4 Project</h1>
    <h2>Web44, Unit 4, Sprint 1</h2>
    <p>Murray Warnock</p>
    <p>August 5, 2021</p>
  `);
});

server.use('*', (req, res, next) => {
  console.log(`hitting ${req.method} ${req.baseUrl}`);
  next({ status: 404, message: 'not found' });
});

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({ message: `ERROR: ${err.message}` });
});

module.exports = server;
