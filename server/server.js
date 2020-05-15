const express = require("express");

var bcrypt = require("bcrypt");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: `${__dirname}/config.env` });
const User = require("./Model/User");
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
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: "Fields required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ Error: "Incorrect email or password" });
  }
  try {
    const match = await user.comparePasswords(password, user.password);
    if (match) {
      return res.status(200).json({ user });
    }
  } catch (err) {
    return res.status(401).json({ Error: "Incorrect email or password" });
  }
});
app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(401).json({ message: "Fields required" });
  }

  const user = await User.create({
    email,
    name,
    password,
  });
  res.status(201).json({ user });
});
app.get("/profile/:id", (req, res) => {});
app.patch("/image/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  let entry = user.entries;
  entry++;
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      entries: entry,
    }
  );
  res.send(updatedUser);
});
app.listen(5000, () => {
  console.log("Server running ...");
});
