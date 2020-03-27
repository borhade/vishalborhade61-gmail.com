var express = require('express');
var base_url ='E:/vishalborhade61-gmail.com-master/vishalborhade61-gmail.com/app/';
var router = express.Router();
var dbconnection = require(base_url+'router/db_connection');
router.get('/',function(req,res){
  dbconnection.query('SELECT * FROM worker',function(err,rows,fields){
     if (err) throw err
    res.render('index',{
          pagetitle:'User List',
          worker_data:rows
     });
  });
});

//-----delete----------------------------//

router.delete('/crud/:id',function(req,res){
  var delete_id = req.params.id;
  var delete_query = `DELETE FROM worker where WORKER_ID=${delete_id}`;
    dbconnection.query(delete_query,function(err,rows,fields){
      if(err) throw err;
  });
});

// edit form
router.get('/edit_record/:id',function(req,res){
    res.render('edit_form',{
        pagetitle:'User Edit Form',
    });
});

module.exports= router;
