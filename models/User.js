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
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  hobbies: {
    type: Array,
    required: true,
  },
  passion: {
    type: Array,
    required: true,
  },
  goals: {
    type: Array,
    required: true,
  },
});
