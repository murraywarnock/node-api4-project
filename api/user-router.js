const express = require('express');

const Users = require('./user-data.js');

const router = express.Router();

function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        next({message: "Please supply username and password"});
    } else {
        next();
    }
}

router.get('/users', (req, res, next) => {
  Users.find(req.query)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      next(error) 
    });
});


router.post('/api/register', validateUser, (req, res, next) => { 
  Users.add(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      next(error)
    });
});

router.post('/api/login', validateUser, (req, res, next) => { // { name: 'lady gaga' }
    res.status(200).json({message: "Welcome to Module 4 Project"});
  });

module.exports = router;
