var express = require('express');
var session = require('express-session');
var requests = require('./utils/requests.js');
var controller = require('./controllers/index.js');

var router = express.Router();

//Middleware function to check login status
router.use('/create', function(req, res, next){
  if(req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
});

router.use('/rsvp', function(req, res, next){
  if(req.session.loggedIn) {
    next();
  } else {
    console.log('redirect from rsvp')
    res.redirect('/login');
  }
});

//API Requests

router.route('/searchRestaurants')
  .get(function(req, res) {
    //make API call
    requests.nearbySearch(req, res);
  })

// DB Queries

router.route('/list')
  .get(function(req, res) {
    console.log('got it')
    // fetch data for all events
    controller.events.get(req, res);
  });

router.route('/create')
  .get(function(req, res) {
    // fetch event list once new event has been added
    controller.events.get(req, res);
  })
  .post(function(req, res) {
    // add event to database
    controller.events.post(req, res);
  })

  router.route('/rsvp')
    .get(function(req, res) {
      controller.rsvp.getByEvent(req, res);
    })
    .post(function(req, res) {
      controller.rsvp.post(req, res);
    })
    .delete(function(req, res) {
      controller.rsvp.delete(req, res);
    })

// Authentication - add routes here

router.route('/signup')
  .get(function(req, res) {
    // render signup page
    res.send('signup test - get')
  })
  .post(function(req, res) {
    var exists = controller.users.get(req, res);
    if (!exists) {
      controller.users.post(req, res);
      req.session.loggedIn = true;
      res.redirect('/');
    } else {
      res.send('username not available, please choose another');
    }
  })

router.route('/login')
  .get(function(req, res) {
    // render login page
    res.send('login test - get')
  })
  .post(function(req, res) {
    console.log('req.session', req.session)
    controller.login.get(req, res, function(userData) {
      if (userData) {
        console.log('userData', userData)
        req.session.regenerate(function() {
          req.session.user_id = id;
          req.session.user = username;
          req.session.loggedIn = true;
          console.log('login success')
          res.redirect('/');
        });
      } else {
        console.log('no userData')
        res.send('Password does not match username - please try again')
      }
    });
  })

router.route('/logout')
  .get(function(req, res) {
    req.session.destroy();
    console.log('logged out', req.session) //should be undefined
    res.redirect('/');
  })





module.exports = router;
