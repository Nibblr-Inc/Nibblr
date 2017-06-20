var express = require('express')
var path = require('path')
var morgan = require('morgan')
var router = require('./router')

var app = express()

app.use(morgan('dev'));

// app.use(express.static(__dirname));

app.use('/', express.static(__dirname + '/client'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.use('/', router);

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
