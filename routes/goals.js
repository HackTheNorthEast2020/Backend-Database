const express = require("express");
const router = express.Router();

// @route  POST api/goals
// @desc Register a user
// @access Public
router.get("/", (req, res) => {
  res.send("Get all goals");
});

module.exports = router;
