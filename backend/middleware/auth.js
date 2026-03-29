const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // 🔹 Get token from header
    const token = req.headers.authorization;

    // ❌ If no token
    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }

    // 🔹 Verify token using ENV secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔹 Attach user data to request
    req.user = decoded;

    next();

  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Invalid token" });
  }
};
