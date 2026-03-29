const Expense = require("../models/Expense");

exports.create = async (req, res) => {
  const expense = await Expense.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(expense);
};

exports.myExpenses = async (req, res) => {
  const data = await Expense.find({ userId: req.user.id });
  res.json(data);
};
