angular.module('nibblr')

.service('eventsRequests', function($http){
  // TODO
  var makeQueryString = function(url, params) {
    var paramsArray = []
    for (p in params) {
      paramsArray.push(p + '=' + params[p]);
    }
    return url + paramsArray.join('&');
  }

  this.getEvents = function(query, callback) {
    $http({
    url: makeQueryString('http://localhost:3000/list?', query),
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error')
    });
  }

  this.postEvent = function(body, callback) {
    $http({
    url: 'http://localhost:3000/submit?',
    method: 'POST',
    dataType: 'json',
    // body = obj{} w/ keys: name, event_time, location, google_place_id, description, creatorID, address, category
    data: body,
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error')
    });
  }

  this.redirectToCreate = function() {
    $http({
    url: 'http://localhost:3000/create'
  }).then(function successCallback(response) {
      window.location.href = "http://localhost:3000/create"
  }, function errorCallback() {
    alert('Must be Logged In to Create Event')
  });
  }
});
