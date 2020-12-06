const express = require("express");
require("dotenv").config();

const mongooseDriver = require("./services/MongoDB");

const app = express();

app.get("/", (req, res) => {
  res.send("Demo");
});

app.listen(3000, () => {
  console.log("el servidor está corriendo");
});
