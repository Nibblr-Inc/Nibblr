var express = require('express')
var path = require('path')
var morgan = require('morgan')
var bodyParser = require('body-parser');
var session = require('express-session');
var router = require('./router')


var app = express()

app.use(bodyParser());
app.use(morgan('dev'));

// set headers to allow cross-origin requests

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', express.static(path.join(__dirname, '../')))

// Serve static files

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})


//Create session

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: null }
}));

// implement router

app.use('/', router);

//middleware to check login

var checkSession = function(req, res, next){
  if(req.session.loggedIn) {
    next();
  } else {
    res.sendStatus(530);
  }
}
//place check session in as middleware
app.get('/create', checkSession, function (req, res) {
  res.sendFile(path.join(__dirname, '../client/createEvent.html'));
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
