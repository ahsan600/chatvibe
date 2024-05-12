const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChat = new Schema({
  senderid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiveid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: [
    {
      message: {
        type: String,
      },

      isMined: {
        type: Boolean,
      },
    },
  ],
});
const Chats = mongoose.model("Chats", userChat);
module.exports = Chats;
