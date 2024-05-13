const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatList = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chatList: [
    {
      adduserid: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
      userImage: String,
    },
  ],
});
const ChatList = mongoose.model("ChatList", chatList);
module.exports = ChatList;
