const express = require("express");
const port = 8000;

const app = express();

//Middleware
app.use(express.urlencoded());

//Routes

//Starting the server
app.listen(port, function(error) {
  if (error) {
    console.log("Error while starting the server on " + port);
    return;
  }
  console.log("Server is running on port " + port);
});