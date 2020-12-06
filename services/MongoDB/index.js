"use strict";

const { concat } = require("rxjs");
// const mongoDB = require("./MongoDB").singleton();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URL;

console.log({ MONGO_URL });

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {};
