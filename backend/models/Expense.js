const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: String,
  amount: Number,
  currency: String,
  category: String,
  description: String,
  status: { type: String, default: "Pending" },
  approvals: []
});

module.exports = mongoose.model("Expense", schema);
