// import sequelize
const Sequelize = require('sequelize');

// import databse 
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  expenseamt: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  info: {
    type: Sequelize.STRING,
    unique: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Expense;