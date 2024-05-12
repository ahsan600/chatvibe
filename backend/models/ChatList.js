const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatList = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chatList: [
    {
      chatid: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      receiverid: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      message: {
        type: String,
      },
      isMined: {
        type: Boolean,
      },
    },
  ],
});
const ChatList = mongoose.model("ChatList", chatList);
module.exports = ChatList;
