var express = require('express');
var bodyParser = require('body-parser');
var base_url ='E:/vishalborhade61-gmail.com-master/vishalborhade61-gmail.com/app/';
var router = express.Router();
var dbconnection = require(base_url+'router/db_connection');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/',function(req,res){
  dbconnection.query('SELECT * FROM worker',function(err,rows,fields){
     if (err) throw err
    res.render('index',{
          pagetitle:'User List',
          worker_data:rows
     });
  });
});

router.get('/add_record_form',function(req,res){
    res.render('add_form',{
      pagetitle:'Add Record Form'
    });
})


router.post('/add_record_to_db',function(req,res){
   console.log(req.body.first_name);
   var insert_query = `insert into worker(FIRST_NAME,LAST_NAME,SALARY) values('`+req.body.first_name+`','`+req.body.last_name+`',`+req.body.salary+`)`;
   dbconnection.query(insert_query,function(err,result){
        if(err) throw err;
        console.log(result.insertId);
   });
});


//---------delete----------------------------//
router.delete('/crud/:id',function(req,res){
  var delete_id = req.params.id;
  var delete_query = `DELETE FROM worker where WORKER_ID=${delete_id}`;
    dbconnection.query(delete_query,function(err,rows,fields){
      if(err) throw err;
  });
});

// edit form
router.get('/edit_record/:id',function(req,res){
    var edit_id = req.params.id;
    var edit_query = `SELECT * FROM worker where WORKER_ID=${edit_id}`;
    dbconnection.query(edit_query,function(err,rows,fields){
        if(err) throw err;
            res.render('edit_form',{
              pagetitle:'User Edit Form',
              edit_data:rows
        });
    });
});

// Update Record
router.put('/update_record/:id',function(req,res){
  var update_id = req.params.id;
  var update_query =`update worker SET FIRST_NAME='`+req.body.first_name+`',LAST_NAME='`+req.body.last_name+`',SALARY=`+req.body.salary+` WHERE WORKER_ID=${update_id}`;
  console.log(update_query);
  dbconnection.query(update_query,function(err,result){
      if(err) throw err;
  });

})


module.exports= router;
