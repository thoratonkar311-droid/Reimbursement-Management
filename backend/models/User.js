const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  managerId: String,
  companyId: String
});

module.exports = mongoose.model("User", schema);
