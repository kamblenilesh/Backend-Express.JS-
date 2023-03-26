// import express
const express = require('express');

// import expensectr from Controller
const expenseController = require('../controllers/expensectr');

const router = express.Router();

// /expenses/add-expense => POST
router.post('/add-expense', expenseController.postAddExpense);

// /expenses/get-expenses => GET
router.get('/get-expenses', expenseController.getAllExpenses);

// /expenses/get-expenses => DELETE
router.delete('/// /expenses/get-expenses => GET', expenseController.postDeleteExpense);

module.exports = router;