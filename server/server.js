const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {});
app.post("/signin", (req, res) => {
  console.log(req.body);
  res.send("signin");
});
app.post("/register", (req, res) => {});
app.get("/profile/:id", (req, res) => {});
app.post("/image", (req, res) => {});
app.listen(5000, () => {
  console.log("Server running ...");
});
