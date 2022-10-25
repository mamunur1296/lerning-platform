const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PROT || 5000;
const cources = require("./data/cources.json");
const courcesCatagory = require("./data/corcesCatagory.json");

app.use(cors());
app.get("/allcources", (req, res) => {
  res.send(cources);
});
app.get("/allcources/:id", (req, res) => {
  const id = req.params.id;
  const celectedCorce = cources.find((c) => c.id === id);
  res.send(celectedCorce);
});
app.get("/corcesCatagory", (req, res) => {
  res.send(courcesCatagory);
});

app.get("/", (req, res) => {
  res.send("hallo wold");
});

app.listen(port, () => {
  console.log("server is raning");
});
