const express = require("express");
const router = express.Router();
const { check, validationResults } = require("express-validator");

const User = require("../models/User");

// @route  POST api/users
// @desc Register a user
// @access Public
router.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
