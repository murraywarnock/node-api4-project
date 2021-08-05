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
  res.status(200).json( Users.find());
});


router.post('/register', validateUser, (req, res, next) => { 
    res.status(200).json(Users.add(req.body))
});

router.post('/login', (req, res, next) => { // { name: 'lady gaga' }
    const result = Users.login(req.body)
    if (result === "not found") {
        res.status(401).json({message: "User not found"})
    } else {
        res.status(200).json({message: "Welcome to Module 4 Project"});
    }
});

module.exports = router;
