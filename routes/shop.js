// importing path
const path = require('path');

// import express
const express = require('express');

const rootDir = require('../util/path');

// import router using module
const shopRouter = express.Router();

// get, post, del get extract match not 'use' method
shopRouter.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); // create path bcz windonws & mac has different path
});

module.exports = shopRouter;