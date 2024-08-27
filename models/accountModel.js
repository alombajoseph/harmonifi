// models/accountModel.js
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
    type: { type: String, required: true }, // e.g., Checking, Savings, etc.
}, { timestamps: true });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;

