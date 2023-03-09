// Creating a node server
const http = require('http');

// import express
const express = require('express');

// import body-parser
const bodyParser = require('body-parser');

// Creating express application,   express as function
const app = express();

// importing admin-router object
const adminRoutes = require('./routes/admin');

// importing shop-router object
const shopRoutes = require('./routes/shop');

// send through a form
app.use(bodyParser.urlencoded({extended: false}));

// call obj file
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Error Page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);