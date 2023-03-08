// Creating a node server
const http = require('http');

// import express
const express = require('express');

// Creating express application,   express as function
const app = express();

// object, add use method which handle requestHandler, next is function
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middlerware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); // Allows to send a response
});

app.listen(4000);