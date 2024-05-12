const mongoose = require("mongoose");
const { Schema } = mongoose;

const userData = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  userImage: String,
});
const User = mongoose.model("User", userData);
module.exports = User;
