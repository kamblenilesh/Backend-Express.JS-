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

// import User
const User = require('./models/user');

// for cross request
const cors = require('cors');

// Creating express application,   express as function
const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

// importing admin-router object
const adminRoutes = require('./routes/admin');

// importing shop-router object
const shopRoutes = require('./routes/shop');

// importing contact-router object
const contactRoutes = require('./routes/contact');

// importing expenses-router object
const expenseRoutes = require('./routes/expenseroute');

// send JSON response
app.use(bodyParser.json({ extended: false }));

// Adding static path for CSS file
app.use(express.static(path.join(__dirname, 'public')));

// call obj file
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
// Expenses routrs
app.use('/expenses', expenseRoutes);

// POST for booking
app.post('/user/add-user', async (req, res, next) => {
    try {
        if (!req.body.email) {
            throw new Error('Email is mandatory')
        }

        // Get value
        const name = req.body.uname;
        const email = req.body.email;

        // store in User table
        const data = await User.create({ name: name, email: email });
        // SET Status 201  &  send JSON respone
        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
});

// GET for booking
app.get('/user/get-users', async (req, res, next) => {
    try {
        // using findAll Express method
        const users = await User.findAll();
        res.status(200).json({ allUsers: users });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// DELETE for booking
app.delete('/user/delete-user/:id', async (req, res, next) => {
    const userId = req.params.id;
    try {
        if (!userId == 'undefined') {
            return res.status(400).json({ error: 'TD is missing' });
        }

        // delete user from table
        await User.destroy({ where: { id: userId } });
        res.status(200);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// Success Page
app.use('/success', successController.getSuccessPage);

// Error Page
app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });