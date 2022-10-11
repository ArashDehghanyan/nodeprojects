var mysql = require('mysql2');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3006',
  password: 'Successpoint_2013',
  database: 'mydb1'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table created');
  });
});
