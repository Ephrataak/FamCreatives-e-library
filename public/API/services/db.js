const mysql = require("mysql");

var myconnection = mysql.createConnection({
  host: "localhost",
  user: "myadmin",
  password: "/lU3MWE3-j-]]-ys",
  database: "e_library",
});
myconnection.connect((err) => {
  if (err) console.log(err);
  else console.log("connected sucessfully");
});

module.exports = myconnection;