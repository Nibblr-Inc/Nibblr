angular.module('nibblr')

.service('eventsRequests', function($http){
  // TODO

  this.getEvents = function(callback) {
    $http({
    url: 'http://localhost:3000/list?',
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
    url: 'http://localhost:3000/create?'
    // body = obj{} w/ keys: name, event_time, location, google_place_id, description, creatorID, address, category
  })
  }
});
