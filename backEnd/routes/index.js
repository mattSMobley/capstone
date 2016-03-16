var express = require('express');
var router = express.Router();


var login = require('./login');
var signup = require('./signup');

// Log IN
router.post('/login', login);
// Sign UP
router.post('/signup', signup);


module.exports = router;
