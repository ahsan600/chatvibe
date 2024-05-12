const mongoose = require("mongoose");
const { Schema } = mongoose;
// {
//     id: 1,
//     user: {
//       id: 1,
//       name: "John",
//       avatar: "https://example.com/avatar1.png",
//     },
//     message: "Hey there!",
//     timestamp: new Date("2024-05-11T09:30:00"),
//     isMine: false,
//   },
const userChatList = new Schema({
  chatList: [
    {
      userid: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
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
module.exports = UserChatList;
