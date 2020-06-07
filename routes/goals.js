const express = require("express");
const router = express.Router();

// @route  POST api/goals
// @desc Get all users goals
// @access Private
router.get("/", (req, res) => {
  res.send("Get all goals");
});

// @route  POST api/goals
// @desc Get all users goals
// @access Private
router.get("/", (req, res) => {
  res.send("Get all goals");
});

module.exports = router;
