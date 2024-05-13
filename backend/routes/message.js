const express = require("express");
const router = express.Router();

const UserChatList = require("../models/ChatList");
const Chats = require("../models/Chats");
const ChatList = require("../models/ChatList");
const validateToken = require("../middleware/validateToken");
const User = require("../models/User");
router.post("/chatlist", validateToken, async (req, res) => {
  try {
    let chatList = await ChatList.findOne({ userid: req.user });

    if (!chatList) {
      findUserList = new ChatList({
        userid: req.user,
        chatList: [],
      });
      await findUserList.save();
    }
    res.json(chatList.chatList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.post(
  "/chat"

  // async (req, res) => {
  //   try {
  //     // const { senderid, message } = req.body;
  //     const newChat = new Chats({
  //       senderid: req.body.senderid, // Sender's ID
  //       message: [
  //         {
  //           receiveid: req.body.receiveid, // Receiver's ID
  //           text: req.body.text, // Message text
  //           isMined: req.body.isMined, // Message is mined
  //         },
  //       ],
  //     });
  //     const chat = await newChat.save();
  //     res.json(chat);
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).send("Server Error");
  //   }
  // }
);
router.post("/searchuser", validateToken, async (req, res) => {
  try {
    const { username } = req.body;

    const findUsername = await User.findOne({ username });
    let checkUsersList = await ChatList.findOne({
      "chatList.username": username,
      userid: req.user,
    });
    if (findUsername.id == req.user) {
      return res.json({ message: "User Not Found" });
    }
    if (checkUsersList) {
      return res.json({ message: "User Already In Chat" });
    }
    if (!findUsername) {
      res.json({ message: "User Not Found" });
    } else {
      res.json({
        id: findUsername.id,
        username: findUsername.username,
        userImage: findUsername.userImage,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});
router.post("/adduser", validateToken, async (req, res) => {
  try {
    const { adduserid, username, userImage } = req.body;
    let findUserList = await ChatList.findOne({ userid: req.user });
    console.log(req.user);
    findUserList.chatList.push({
      adduserid: adduserid,
      username: username,
      userImage: userImage,
    });
    const addUser = await findUserList.save();
    res.json(addUser);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});
module.exports = router;
