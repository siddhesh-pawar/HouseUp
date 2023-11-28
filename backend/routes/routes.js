const express = require("express");
const router = express.Router();
const {userRegistration} = require('../controllers/userRegistration');
const { userLogin } = require("../controllers/userLogin");
const {getApartmentNames} = require("../getLists/apartments");
const {searchApartments}=require("../getLists/searchApartment");


router.post('/register', userRegistration);
router.post('/login', userLogin); 
router.get('/getApartment',getApartmentNames);
router.get('/searchApartments', searchApartments);


module.exports = router;