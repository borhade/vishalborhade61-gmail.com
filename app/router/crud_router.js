var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test_1'
  });
connection.connect();

router.get('/',function(req,res){
  connection.query('SELECT * FROM worker',function(err,rows,fields){
     if (err) throw err
      res.json(rows);
  });
    // res.render('index',{
    //     pagetitle:'User List'
    // });
});
module.exports= router;
