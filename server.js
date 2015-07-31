var faker = require('faker');
var express = require('express');
var app = express();
var pg = require('pg');
var hstore = require('pg-hstore')();
var path = require('path');

app.set ('views', './views');
app.set ('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.listen(3000, function () {
 console.log("running");
});