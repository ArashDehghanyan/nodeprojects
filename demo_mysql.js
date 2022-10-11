var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3006",
  password: "Successpoint_2013"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb1", function(err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
