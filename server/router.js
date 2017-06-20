var express = require('express');
var session = require('express-session');
var requests = require('./utils/requests.js');

var router = express.Router();

//API Requests

router.route('/searchRestaurants')
  .get(function(req, res) {
    // nearbySearch & placeDetails here
    requests.nearbySearch({query: {keyword: 'indian'}});
  })

// DB Queries

router.route('/list')
  .get(function(req, res) {
    // insert helper function(s) for event details get requests
    res.send('list test')
  });

router.route('/create')
  .get(function(req, res) {
    // insert helper function(s) for displaying a newly-added event here
    res.send('create test')
  })
  .post(function(req, res) {
    // insert helper function(s) for saving a new event in the database
  })

// Authentication - add routes here

router.route('/signup')
  .get(function(req, res) {
    // render signup page
    res.send('signup test')
  })
  .post(function(req, res) {
    // check if username exists
    // if not, hash password & save username and hashed password to database
    // create session using express-session
    // once complete, redirect to home page
    // if username already exists, display error message telling user to choose another
  })

router.route('/login')
  .get(function(req, res) {
    // render login page
    res.send('login test')
  })
  .post(function(req, res) {
    //compare hashed passwords
    //if they match, regenerate session
    //redirect to home page
    //if hashed passwords don't match, display error message asking user to try again
  })

router.route('/logout')
  .get(function(req, res) {
    //destroy session
    //redirect to home page
    res.send('logout test')
  })





module.exports = router;
