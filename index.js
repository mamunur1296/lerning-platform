const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PROT || 5000;

app.get("/", (req, res) => {
  res.send("hallo wold");
});

app.listen(port, () => {
  console.log("server is raning");
});