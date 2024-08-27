// routes/budgetRoutes.js
const express = require('express');
const { createBudget, getBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');
const verifyToken = require('../verifyToken');

const router = express.Router();

router.route('/')
    .post(verifyToken, createBudget)
    .get(verifyToken, getBudgets);

router.route('/:id')
    .put(verifyToken, updateBudget)
    .delete(verifyToken, deleteBudget);

module.exports = router;

