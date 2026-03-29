const router = require("express").Router();
const auth = require("../middleware/auth");
const { approve } = require("../controllers/approvalController");

router.post("/", auth, approve);

module.exports = router;
