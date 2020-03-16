//Import Express
const express = require("express");
const port = 8000;

//Importing Database
const db = require("./config/mongoose");

//Express App
const app = express();

//Middleware
app.use(express.urlencoded());
app.use("/", require("./routes"));

//Starting the server
app.listen(port, function(error) {
  if (error) {
    console.log("Error while starting the server on " + port);
    return;
  }
  console.log("Server is running on port " + port);
});
