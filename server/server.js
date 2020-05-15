const express = require("express");
var bcrypt = require("bcrypt");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: `${__dirname}/config.env` });
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Db connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {});
app.post("/signin", (req, res) => {
  console.log(req.body);
  res.send("signin");
});
app.post("/register", (req, res) => {
  // bcrypt.hash(req.body.password, 12).then(function (hash) {
  //   // Store hash in your password DB.
  //   console.log(hash);
  //   res.send(hash);
  // });
  // bcrypt
  //   .compare(
  //     req.body.password,
  //     "$2b$12$.9X4AIDlCxUsZOskCX0jIOZuOtfQ6qHf16SyHMM8fc2xUgtNnKBn6"
  //   )
  //   .then(function (result) {
  //     res.send(result);
  //   });
  res.send(req.body);
});
app.get("/profile/:id", (req, res) => {});
app.post("/image", (req, res) => {});
app.listen(5000, () => {
  console.log("Server running ...");
});
