var express = require('express');
var https = require('https');
var google_api_key = require('../../config.js').google_api_key;

console.log('key: ', google_api_key);

exports.nearbySearch = function(req, res) {
  var key = google_api_key;
  var location = encodeURIComponent('30.2671500,-97.7430600')
  var radius = 16000;
  var sensor = false;
  var types = "restaurant";
  var keyword = req.query.keyword;

  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;
    console.log(url);
  https.get(url, function(response) {
    var body ='';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var places = JSON.parse(body);
      var locations = places.results;

      console.log('first location: ', locations[0])
      res.json(locations)
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};


exports.placeDetails = function(req, res) {
  var key = google_api_key;
  var placeid = req.query.placeid;

  var url = "https://maps.googleapis.com/maps/api/place/details/json?" + "key=" + key + "&placeid=" + placeid;
    console.log(url);
  https.get(url, function(response) {
    var body ='';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var place = JSON.parse(body);
      var location = place.result;

      console.log('location: ', location)
      res.json(location)
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};
