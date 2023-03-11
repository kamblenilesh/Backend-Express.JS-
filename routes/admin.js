// importing path
const path = require('path');

// import express
const express = require('express');

const rootDir = require('../util/path');

// import router using module
const router = express.Router();

// object, add get method which handle requestHandler, next is function
// GET request
router.get('/add-product', (req, res, next) => { // next() is not use
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // create path bcz windonws & mac has different path
});

// Execution from top to bottom
// filtering request like post, get, del
// two different path due to method (in 1. get & 2. post)
// POST request
router.post('/add-product', (req, res, next) => {
    console.log(req.body); // Extracting user send
    res.redirect('/');  // redirect to '/'
});

module.exports = router;