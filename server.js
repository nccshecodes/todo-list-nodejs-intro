var express = require ('express');
var bodyParser = require('body-parser');
var app = express();
var tasks = ['Create Node.JS App', 'Have whiskey'];
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.all('/', function(req, res) {
  if(req.body.tasks) {
    tasks = req.body.tasks.filter(function(val) {return val;});
  }
  tasks.push('');
  res.render('index', {
    tasks: tasks
  });
});
app.listen(1337);
