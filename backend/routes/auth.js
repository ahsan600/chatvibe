const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const validateInfo = require("../middleware/validateInfo");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const validateToken = require("../middleware/validateToken");

const privateKey = "hi$imahsan123";

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  validateInfo,
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ email });

      if (!findUser) {
        return res.status(400).send("Invalid Credentials.");
      }

      const hashPassword = await bcrypt.compare(password, findUser.password);

      if (hashPassword) {
        const authtoken = jwt.sign(findUser.id, privateKey);

        return res.json({ token: authtoken });
      } else {
        return res.status(400).send("Invalid Credentials.");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  }
);

router.post(
  "/register",
  [
    body("username").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  validateInfo,
  async (req, res) => {
    try {
      const { username, email, password, userImage } = req.body;

      const checkUser = await User.findOne({ email });

      if (checkUser) {
        return res.status(400).send("User already registered.");
      }

      const hashPassword = await bcrypt.hash(password, saltRounds);
      const createUser = new User({
        username,
        email,
        password: hashPassword,
        userImage,
      });

      const user = await createUser.save();

      const authtoken = jwt.sign(user.id, privateKey);
      res.json({ token: authtoken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);
router.post(
  "/getuser",

  validateToken,
  async (req, res) => {
    try {
      const checkUser = await User.findOne({ _id: req.user });
      res.json(checkUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
