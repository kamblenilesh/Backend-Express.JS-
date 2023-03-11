// importing path
const path = require('path');

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

// importing contact-router object
const contactRoutes = require('./routes/contact');

// send through a form
app.use(bodyParser.urlencoded({extended: false}));

// Adding static path for CSS file
app.use(express.static(path.join(__dirname, 'public')));

// call obj file
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

// Success Page
app.use('/success',(req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// Error Page
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);