var express = require('express');
var app = express();
var path = require('path');
const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));
app.set("view engine","hbs")

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/code', function (req, res) {
  res.render('code');
});

app.listen(4200, function () {
console.log('Example app listening on port 4200!');
});

//console.log(path.join(__dirname,'../public'))
