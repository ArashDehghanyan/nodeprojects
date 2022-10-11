// JavaScript source code
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Successpoint_2013',
    port: '3006',
    database: 'mydb',
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (error, result) {
        if (error) throw error;
        console.log("1 record inserted");
    });
});