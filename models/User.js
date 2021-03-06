const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  hobbies: {
    type: String,
  },
  passion: {
    type: String,
  },
  goals: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
