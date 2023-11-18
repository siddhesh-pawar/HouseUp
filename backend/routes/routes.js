const express = require("express");
const router = express.Router();
const {userRegistration} = require('../controllers/userRegistration');


router.post('/register', userRegistration)
// router.post('/signin', updatePost) 

module.exports = router;