const router = require("express").Router();
const auth = require("../middleware/auth");
const { create, myExpenses } = require("../controllers/expenseController");

router.post("/", auth, create);
router.get("/", auth, myExpenses);

module.exports = router;
