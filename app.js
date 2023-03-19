// importing path
const path = require('path');

// import express
const express = require('express');

// import body-parser
const bodyParser = require('body-parser');

// import controller
const successController = require('./controllers/successPage');

// import controller
const errorController = require('./controllers/error');

// import database
const sequelize = require('./util/database');

// Creating express application,   express as function
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// importing admin-router object
const adminRoutes = require('./routes/admin');

// importing shop-router object
const shopRoutes = require('./routes/shop');

// importing contact-router object
const contactRoutes = require('./routes/contact');

<<<<<<< HEAD
=======
// Execute MySQL Query
db.execute('SELECT * FROM products')
    .then(result => {
        console.log(result[0]);
    })
    .catch(err => {
        console.log(err);
    });

>>>>>>> c089529e09157fee5f598aeb6b012f9904b41385
// send through a form
app.use(bodyParser.urlencoded({extended: false}));

// Adding static path for CSS file
app.use(express.static(path.join(__dirname, 'public')));

// call obj file
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

// Success Page
app.use('/success', successController.getSuccessPage);

// Error Page
app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });