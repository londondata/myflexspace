const router = require("express").Router();

// Normally we do this in server.js, but here we are doing it one layer lower so that we can be sure they are all prepended with /api

router.use("/posts", require("./posts"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

module.exports = router;
