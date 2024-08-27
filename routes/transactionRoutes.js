// routes/transactionRoutes.js
const express = require('express');
const { createTransaction, getTransactions, updateTransaction, deleteTransaction } = require('../controllers/transactionController');
const verifyToken = require('../verifyToken');

const router = express.Router();

router.route('/')
    .post(verifyToken, createTransaction)
    .get(verifyToken, getTransactions);

router.route('/:id')
    .put(verifyToken, updateTransaction)
    .delete(verifyToken, deleteTransaction);

module.exports = router;

