// Creating a node server
const http = require('http');

// import express
const express = require('express');

// import body-parser
const bodyParser = require('body-parser');

// Creating express application,   express as function
const app = express();

// send through a form
app.use(bodyParser.urlencoded({extended: false}));

// object, add use method which handle requestHandler, next is function
app.use('/add-product',(req, res, next) => { // next() is not use
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
});

// Execution from top to bottom
// filtering request like post, get, del
app.post('/product', (req, res, next) => {
    console.log(req.body); // Extracting user send
    res.redirect('/');  // redirect to '/'
});

// get, post, del get extract match not 'use' method
app.use('/',(req, res, next) => {
    // console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // Allows to send a response & no need to next() fun.
});

app.listen(4000);