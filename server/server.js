const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {});
app.post("/signin", (req, res) => {});
app.post("/register", (req, res) => {});
app.post("/");
app.listen(3000, () => {
  console.log("Server running ...");
});
