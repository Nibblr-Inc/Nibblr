var https = require('https');


exports.nearbySearch = function(req, res) {
  var key = window.Google_API_Key;
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

      console.log('locations: ', locations)
      res.json(locations)
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};


exports.placeDetails = function(req, res) {
  var key = window.Google_API_Key;
  var placeid = req.query.placeid;

  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&placeid=" + placeid;
    console.log(url);
  https.get(url, function(response) {
    var body ='';
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      var place = JSON.parse(body);
      // var locations = places.results;

      console.log('place: ', place)
      // res.json(locations)
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
};

exports.placeDetails({query: {placeid: 'ChIJ6WLDCS00W4YR_w3C9RY4Fdc'}});
