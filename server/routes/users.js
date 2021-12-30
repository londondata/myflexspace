// Users Router
const router = require("express").Router();
const { users } = require("../controllers");

router.post("/", users.create);

router.use(require("../config/auth"));
router.get("/", users.index);

module.exports = router;
