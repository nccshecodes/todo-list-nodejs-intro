var express = require ('express');
var app = express();
app.use(express.static('views'));
app.listen(1337);
