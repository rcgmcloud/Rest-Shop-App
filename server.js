var faker = require('faker');
var express = require('express');
var app = express();
var pg = require('pg');
var hstore = require('pg-hstore')();
var path = require('path');
var bodyParser = require('body-parser');

app.set ('views', './views');
app.set ('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});



app.get('/', function (req, res, next) {
  client.get('http://localhost:8080/products', function (err, _req, _res, obj) {
    return res.render('index', {products: obj});
  });
});

app.get('/products/:id', function (req, res, next) {
  client.get('http://localhost:8080/products/' + req.params.id, function (err, _req, _res, obj) {
    return res.render('product_view', {products: obj});
  });
});

app.get('/orders', function (req, res, next) {
  client.get('http://localhost:8080/orders', function (err, _req, _res, obj) {
    return res.render('orders', {orders: obj});
  });
  client.get('http://localhost:8080/products', function (err, _req, _res, obj) {
    return res.render('orders', {products: obj});
  });
});

app.get('/order_view/:id', function (req, res, next) {
  client.get('http://localhost:8080/orders/' + req.params.id, function (err, _req, _res, obj) {
    return res.render('order_view', {order: obj});
  });
});

app.listen(3000, function () {
 console.log("running");
});