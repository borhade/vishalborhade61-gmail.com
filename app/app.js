var express = require('express');
var reload = require('reload');
var base_url ='E:/vishalborhade61-gmail.com-master/vishalborhade61-gmail.com/app/';
var router = require(base_url+'router/crud_router');
var app = express();
app.use(express.static(base_url+'public'));
app.set('port',process.env.PORT||3000);


app.locals.sitetitle='Crud Operation in Node js';
//---------------set view part-----------------------------//
app.set('view engine','ejs');
app.set('views',base_url+'views');
app.use('/crud',router); // Use Router
var server = app.listen(app.get('port'),function(){
  console.log('My CRUD project work on' + app.get('port') + 'port');
});

reload(app,server);
