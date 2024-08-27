// controllers/accountController.js
const Account = require('../models/accountModel');

const createAccount = async (req, res) => {
    const { name, balance, type } = req.body;

    const account = new Account({
        user: req.user._id,
        name,
        balance,
        type,
    });

    const createdAccount = await account.save();
    res.status(201).json(createdAccount);
};

const getAccounts = async (req, res) => {
    const accounts = await Account.find({ user: req.user._id });
    res.json(accounts);
};

const updateAccount = async (req, res) => {
    const account = await Account.findById(req.params.id);

    if (account && account.user.toString() === req.user._id.toString()) {
        account.name = req.body.name || account.name;
        account.balance = req.body.balance || account.balance;
        account.type = req.body.type || account.type;

        const updatedAccount = await account.save();
        res.json(updatedAccount);
    } else {
        res.status(404).json({ message: 'Account not found or not authorized' });
    }
};

const deleteAccount = async (req, res) => {
    const account = await Account.findById(req.params.id);

    if (account && account.user.toString() === req.user._id.toString()) {
        await account.remove();
        res.json({ message: 'Account removed' });
    } else {
        res.status(404).json({ message: 'Account not found or not authorized' });
    }
};

module.exports = { createAccount, getAccounts, updateAccount, deleteAccount };

