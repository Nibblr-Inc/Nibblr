angular.module('nibblr')

.service('rsvpRequests', function($http){

  var makeQueryString = function(url, params) {
    var paramsArray = []
    for (p in params) {
      paramsArray.push(p + '=' + params[p]);
    }
    return url + paramsArray.join('&');
  }


  this.postRSVP = function(body, callback) {
    $http({
    url: 'http://localhost:3000/rsvp?',
    method: 'POST',
    dataType: 'json',
    data: body, // all that will be needed is {event_id: event_id}
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error')
      callback(response);
    });
  }

  this.cancelRSVP = function(query, callback) {
    $http({
    url: makeQueryString('http://localhost:3000/rsvp?', query),
    method: 'DELETE',
    dataType: 'json',
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error: ', response)
    });
  }

  this.getSessionUser = function(callback) {
    $http({
    url: 'http://localhost:3000/sessionuser?',
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      callback(response)
    }, function errorCallback(response) {
      console.log('=( error in logout')
    });
  }
});
