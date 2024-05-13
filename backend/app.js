const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/chatvibe");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/message", require("./routes/message.js"));
app.listen(3000, () => {
  console.log("Server is Listening on 3000");
});
