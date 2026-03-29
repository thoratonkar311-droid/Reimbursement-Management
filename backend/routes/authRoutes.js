const router = require("express").Router();

// ✅ CORRECT IMPORT
const authController = require("../controllers/authController");

// ✅ USE FUNCTIONS PROPERLY
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
