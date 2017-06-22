var express = require('express')
var path = require('path')
var morgan = require('morgan')
var bodyParser = require('body-parser');
var session = require('express-session');
var router = require('./router')
<<<<<<< fa6836ebffe93ec7851e7b33431d549decab84f5
=======
// require('./db/seed_db.js');  // this will populate db with seed data
>>>>>>> Attempt to implement login service, still needs more work

var app = express()

app.use(bodyParser());
app.use(morgan('dev'));

// app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', express.static(path.join(__dirname, '../')))



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/createEvent.html'));
})

//Create session

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: null }
}));

app.use('/', router);

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
