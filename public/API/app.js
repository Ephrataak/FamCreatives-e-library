const express = require("express");
const cors = require("cors");
const routes = require("./routes");
// const appError = require("./utils");
// const errorHandler = require("./utils");
const app = express();
const myconnection = require("./services/db");


myconnection;

const PORT = 2023;
app.listen(PORT, (err) => {
  if (err) console.log(err)
  else 
  console.log(`server running on port ${PORT}`);
});

module.exports = app;