const mongoose = require("mongoose");
const express = require("express");

const app = express();

console.log(app);
mongoose.connect("mongodb://localhost/BusDatabase");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to database using mongoose");
});
