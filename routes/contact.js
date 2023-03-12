// importing path
const path = require('path');

// import express
const express = require('express');

// import controller
const contactController = require('../controllers/contactus');

// import router using module
const router = express.Router();

// object, add get method which handle requestHandler, next is function
// GET request
router.get('/contactus', contactController.getContact);

// Execution from top to bottom
// filtering request like post, get, del
// two different path due to method (in 1. get & 2. post)
// POST request
router.post('/contactus', contactController.postcontact);

module.exports = router;