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
  console.log('Connected!');
  var sql = "ALTER TABLE students ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function(error, result) {
    if (error) throw error;
    console.log("Table altered");
  });
});
