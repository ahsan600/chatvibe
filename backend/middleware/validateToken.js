const jwt = require("jsonwebtoken");
const privateKey = "hi$imahsan123";
const validateToken = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(400).send("Provide Token");
    }

    const authToken = await jwt.verify(token, privateKey);
    if (authToken) {
      req.user = authToken;

      next();
    } else {
      res.status(400).send("Invalid Token");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
module.exports = validateToken;
