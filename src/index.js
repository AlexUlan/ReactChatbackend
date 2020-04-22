const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const UserModel = require("./schemas/index");
const { UserController } = require("./contollers/index.js");

const app = express();

app.use(bodyParser.json());

const User = new UserController();

app.get("/user/:id", User.show);
app.delete("/user/:id", User.delete);
app.post("/user/registration", User.create);

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
