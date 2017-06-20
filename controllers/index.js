var models = require('../models');

module.exports = {

  events: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.name, req.body.event_time, req.body.location, req.body.description, req.body.creatorID, req.body.address, req.body.category];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username, req.body.password];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },
  rsvp: {
    post: function(req, res) {
      var params = [req.body.user_id, req.body.event_id];
      models.rsvp.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      })
    }
  }
};
