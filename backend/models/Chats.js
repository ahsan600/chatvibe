const mongoose = require("mongoose");
const { Schema } = mongoose;

const userChat = new Schema({
  senderid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  message: [
    {
      receiveid: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});
const Chats = mongoose.model("Chats", userChat);
module.exports = Chats;
