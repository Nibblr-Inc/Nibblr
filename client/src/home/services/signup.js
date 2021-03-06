angular.module('nibblr')

.service('signUp', function($http, $window){
  // TODO

  this.signUp = function(body, callback) {
    $http({
    url: 'http://localhost:3000/signup?',
    method: 'POST',
    dataType: 'json',
    data: body, // all that will be needed is {username: 'username', password: 'password'}
    }).then(function successCallback(response) {

      if (callback) {
        console.log('response from signup', response)
        if (response.data === 'signed up!') {
          // sessionStorage.setItem('loggedIn', true);
          $window.location.reload();
        }
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error with signup', response)
    });
  }

});
