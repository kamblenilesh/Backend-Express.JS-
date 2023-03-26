// import Expenses database
const Expense = require('../models/expenses');

// Get all Expenses
exports.getAllExpenses = async (req, res, next) => {
    try {
        // using findAll Express method
        const expenses = await Expense.findAll();
        // SET Status 203  &  send JSON respone
        res.status(203).json({ allExpenses: expenses });
    } catch (err) {
        res.status(501).json({ error: err });
    }
};

exports.postAddExpense = async (req, res, next) => {
    try {
        if (!req.body.info) {
            throw new Error('Description is mandatory')
        }

        const expenseamt = req.body.expenseamt;
        const info = req.body.info;
        const category = req.body.category;

        const data = await Expense.create({ expenseamt: expenseamt, info: info, category: category });
        res.status(205).json({ newExpenseDetail: data });
    } catch (err) {
        res.status(501).json({
            error: err
        });
    }
};


exports.postDeleteExpense = async (req, res, next) => {
    const expenseId = req.params.id;
    try {
        if (!expenseId == 'undefined') {
            return res.status(400).json({ error: 'TD is missing' });
        }

        await Expense.destroy({ where: { id: expenseId } });
        res.status(203);
    } catch (err) {
        res.status(501).json({ error: err });
    }
};