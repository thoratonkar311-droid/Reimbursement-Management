const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    ...req.body,
    password: hash,
    role: "Admin"
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.send("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id, role: user.role }, "secret");

  res.json({ token, user });
};
