const express = require("express");
const router = express.Router();

const UserChatList = require("../models/UserChatList");

router.post(
  "/getchatlist",

  async (req, res) => {
    try {
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  }
);
router.post(
  "/userchat",

  async (req, res) => {
    try {
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
