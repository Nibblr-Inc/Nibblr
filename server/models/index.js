var db = require('../db');

module.exports = {

  events: {
    get: function (params, callback) {
      // get all events
      var queryStr = 'select e.*, group_concat(u.id) rsvp_user_id, group_concat(u.username) rsvp_usernames \
                      from (select e.*, u.username from events e \
                      inner join users u on e.creatorID = u.id) e \
                      left outer join rsvp r on e.id = r.event_id \
                      left outer join users u \
                      on r.user_id = u.id \
                      group by e.id, e.name, e.event_time, e.location, e.google_place_id, e.description, e.creatorID, e.address, e.category, e.username, e.photo_url';

      // if given a specific event_id, example: params = [1]
      // include hidePastEvents if only want upcoming events
      console.log('params in models: ', params)
      if (params.hidePastEvents || params.event_id) {
        var concatToQuery = '';
        if (params.hidePastEvents && !params.event_id) {
          concatToQuery = ' having event_time > NOW()'
          queryStr = queryStr.concat(concatToQuery);
          db.query(queryStr, function(err, data) {
            callback(err, data);
          });
        } else {
          if (!params.hidePastEvents && params.event_id) {
            concatToQuery = ' having e.id = ?'
          } else if (params.hidePastEvents && params.event_id) {
            concatToQuery = ' having e.id = ? and event_time > NOW()'
          }
          queryStr = queryStr.concat(concatToQuery);
          db.query(queryStr, [Number(params.event_id)], function(err, data) {
            console.log('data: ', data)
            callback(err, data);
          });
        }
      } else {
        db.query(queryStr, function(err, data) {
          console.log('data in model: ', data);
          callback(err, data);
        });
      }
    },
    post: function (params, callback) {
      // create a new event
      var queryStr = 'insert into events (name, event_time, location, google_place_id, description, creatorID, address, photo_url) \
                      value (?, ?, ?, ?, ?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (params, callback) {
      // fetch all users
      var queryStr = 'select * from users';
      if (params.length) {
        queryStr = queryStr.concat(' where username = ?');
        db.query(queryStr, params, function(err, results) {
          callback(err, results);
        })
      } else {
        db.query(queryStr, function(err, results) {
          callback(err, results);
        });
      }
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
    getByUser: function(params, callback) {
      // gets all events rsvped by a specific user
      var queryStr = 'select * from rsvp where user_id = ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    },
    getByEvent: function(params, callback) {
      // gets all users rsvped for a specific event
      var queryStr = 'select * from rsvp where event_id = ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    },
    post: function(params, callback) {
      // create a new rsvp
      var queryStr = 'insert into rsvp (user_id, event_id) values (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },
    delete: function(params, callback) {
      var queryStr = 'delete from rsvp where event_id = ? and user_id = ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    }
  },
  login: {
    get: function (params, callback) {
      var queryStr = 'select * from users where username = ?';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      })
    }
  }
};
