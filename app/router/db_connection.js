var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test_1'
  });
connection.connect();
module.exports=connection;
