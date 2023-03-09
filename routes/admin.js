// import express
const express = require('express');

// import router using module
const router = express.Router();

// object, add use method which handle requestHandler, next is function
router.get('/add-product',(req, res, next) => { // next() is not use
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
});

// Execution from top to bottom
// filtering request like post, get, del
router.post('/product', (req, res, next) => {
    console.log(req.body); // Extracting user send
    res.redirect('/');  // redirect to '/'
});

module.exports = router;