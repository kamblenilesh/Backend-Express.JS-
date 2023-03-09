// import express
const express = require('express');

// import router using module
const router = express.Router();

// object, add get method which handle requestHandler, next is function
// GET request
router.get('/add-product',(req, res, next) => { // next() is not use
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
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