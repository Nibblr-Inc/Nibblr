angular.module('nibblr')

.service('login', function($http){
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
      sessionStorage.setItem('loggedIn', true);
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error', body, response)
    });
  }
});
