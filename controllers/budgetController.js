// controllers/budgetController.js
const Budget = require('../models/budgetModel');

const createBudget = async (req, res) => {
    const { category, limit, period } = req.body;

    const budget = new Budget({
        user: req.user._id,
        category,
        limit,
        period,
    });

    const createdBudget = await budget.save();
    res.status(201).json(createdBudget);
};

const getBudgets = async (req, res) => {
    const budgets = await Budget.find({ user: req.user._id });
    res.json(budgets);
};

const updateBudget = async (req, res) => {
    const budget = await Budget.findById(req.params.id);

    if (budget && budget.user.toString() === req.user._id.toString()) {
        budget.category = req.body.category || budget.category;
        budget.limit = req.body.limit || budget.limit;
       

