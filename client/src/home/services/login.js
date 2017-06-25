angular.module('nibblr')

.service('login', function($http, $window){
  // TODO

  this.login = function(body, callback) {

    $http({
    // body should be obj with keys: username, password
    url: 'http://localhost:3000/login?',
    method: 'POST',
    dataType: 'json',
    data: body,
    }).then(function successCallback(response) {
      console.log('response from login', response);
      if (callback) {
        if (response.data === 'Created') {
          // sessionStorage.setItem('loggedIn', true);
          $window.location.reload();
        }
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error', body, response)
      $window.location.reload();
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
