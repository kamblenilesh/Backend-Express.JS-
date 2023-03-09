// import express
const express = require('express');

// import router using module
const shopRouter = express.Router();

// get, post, del get extract match not 'use' method
shopRouter.get('/',(req, res, next) => {
    // console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // Allows to send a response & no need to next() fun.
});

module.exports = shopRouter;