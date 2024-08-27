// routes/accountRoutes.js
const express = require('express');
const { createAccount, getAccounts, updateAccount, deleteAccount } = require('../controllers/accountController');
const verifyToken = require('../verifyToken');

const router = express.Router();

router.route('/')
    .post(verifyToken, createAccount)
    .get(verifyToken, getAccounts);

router.route('/:id')
    .put(verifyToken, updateAccount)
    .delete(verifyToken, deleteAccount);

module.exports = router;

