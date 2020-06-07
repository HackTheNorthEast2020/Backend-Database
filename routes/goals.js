const express = require("express");
const router = express.Router();

// @route  POST api/goals
// @desc Get all users goals
// @access Private
router.get("/", (req, res) => {
  res.send("Get all goals");
});

// @route  POST api/goals
// @desc Add new goals
// @access Private
router.post("/", (req, res) => {
  res.send("Get all goals");
});

// @route  POST api/goals/:id
// @desc Update goal
// @access Private
router.post("/", (req, res) => {
  res.send("Get all goals");
});

module.exports = router;
