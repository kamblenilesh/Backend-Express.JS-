// import sequelize
const Sequelize = require('sequelize');

//                              database name  , user  ,  Password
const sequelize = new Sequelize('node-complete', 'root', 'MySQL@2023', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;