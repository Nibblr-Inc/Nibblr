var db = require('../db');

module.exports = {

  events: {
    get: function (callback) {
      // get all events
      var queryStr = 'select * from events order by event_time';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a new event
      var queryStr = 'insert into events (name, event_time, location, description, creatorID, address, category) \
                      value (?, ?, ?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users (username, password) values (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  rsvp: {
    post: function(params, callback) {
      // create a new rsvp
      var queryStr = 'insert into rsvp (user_id, event_id) values (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};



// tests:

// module.exports.users.post(['mike', 'abc'], function(err, results) {
//   console.log('users test post err: ', err)
//   console.log('users test post results: ', results)
// })
//
// module.exports.users.post(['nate', 'abc'], function(err, results) {
//   console.log('users test post err: ', err)
//   console.log('users test post results: ', results)
// })
//
// module.exports.users.post(['molly', 'abc'], function(err, results) {
//   console.log('users test post err: ', err)
//   console.log('users test post results: ', results)
// })
//
//
// // name, event_time, location, description, creatorID, address, category
// module.exports.events.post(['first event', '2017-07-04 12:30:00', 'Home Slice', 'This is the first event', 1, '800 Brazos St', 'pizza'], function(err, results) {
//   console.log('events test post err: ', err)
//   console.log('events test post results: ', results)
// })
//
// module.exports.events.post(['second event', '2017-07-04 12:30:00', 'Home Slice', 'This is the second event', 1, '800 Brazos St', 'pizza'], function(err, results) {
//   console.log('events test post err: ', err)
//   console.log('events test post results: ', results)
// })

module.exports.events.get(function(err, results) {
  console.log('events test get results: ', results)
  for (var evnt of results) {
    console.log('event.id: ', evnt.id);
  }
})
