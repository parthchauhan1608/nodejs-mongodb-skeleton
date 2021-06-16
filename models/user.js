const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: String
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", user);
