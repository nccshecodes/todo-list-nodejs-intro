var express = require ('express');
var app = express();
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.all('/', function(req, res){
  res.render('index', {
    tasks:['Create Node.JS App', 'Have whiskey', '']
  });
});
app.listen(1337);
