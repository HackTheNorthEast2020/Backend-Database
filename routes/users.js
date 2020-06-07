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
    check(
      "password",
      "Please enter a password with atleast 6 character"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResults(req);
  }
);

module.exports = router;
