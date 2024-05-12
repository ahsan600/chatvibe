const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserChat = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  message: [
    {
      userData: {
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
const UserChatList = mongoose.model("UserChatList", userChatList);
module.exports = UserChat;
