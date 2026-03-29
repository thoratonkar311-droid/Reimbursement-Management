const Expense = require("../models/Expense");

exports.approve = async (req, res) => {
  const { expenseId, status } = req.body;

  const expense = await Expense.findById(expenseId);

  expense.approvals.push({
    approver: req.user.id,
    status
  });

  const approved = expense.approvals.filter(a => a.status === "Approved").length;
  const total = expense.approvals.length;

  if ((approved / total) * 100 >= 60) {
    expense.status = "Approved";
  }

  await expense.save();
  res.json(expense);
};
