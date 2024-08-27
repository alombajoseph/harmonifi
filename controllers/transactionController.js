// controllers/transactionController.js
const Transaction = require('../models/transactionModel');

const createTransaction = async (req, res) => {
    const { account, amount, type, category, date } = req.body;

    const transaction = new Transaction({
        user: req.user._id,
        account,
        amount,
        type,
        category,
        date,
    });

    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
};

const getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ user: req.user._id });
    res.json(transactions);
};

const updateTransaction = async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction && transaction.user.toString() === req.user._id.toString()) {
        transaction.account = req.body.account || transaction.account;
        transaction.amount = req.body.amount || transaction.amount;
        transaction.type = req.body.type || transaction.type;
        transaction.category = req.body.category || transaction.category;
        transaction.date = req.body.date || transaction.date;

        const updatedTransaction = await transaction.save();
        res.json(updatedTransaction);
    } else {
        res.status(404).json({ message: 'Transaction not found or not authorized' });
    }
};

const deleteTransaction = async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction && transaction.user.toString() === req.user._id.toString()) {
        await transaction.remove();
        res.json({ message: 'Transaction removed' });
    } else {
        res.status(404).json({ message: 'Transaction not found or not authorized' });
    }
};

module.exports = { createTransaction, getTransactions, updateTransaction, deleteTransaction };

