// import path
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

// import User
const Product = require('./models/product');

// import User
const User = require('./models/user');

// import Cart
const Cart = require('./models/cart');

// import CartItem
const CartItem = require('./models/cart-item');

// import Order
const Order = require('./models/order');

// import OrderItem
const OrderItem = require('./models/order-item');

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
app.use(bodyParser.urlencoded({ extended: false }));

// Adding static path for CSS file
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    });
});

// call obj file
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
// Expenses routrs
app.use('/expenses', expenseRoutes);

// Success Page
app.use('/success', successController.getSuccessPage);

// Error Page
app.use(errorController.get404);

Product.belongsTo(User, { contraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
    // .sync( {force: true})
    .sync()
    .then(result => {
        return User.findByPk(1);
        // console.log(result);
    })
    .then(user => {
        if (!user) {
            return User.create({name: 'Max', email: 'test@test.com'});
        }
        return user;
    })
    .then(user => {
        // console.log(user);
        return user.createCart();
    })
    .then(cart => {
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });