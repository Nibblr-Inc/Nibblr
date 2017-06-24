angular.module('nibblr')

.service('logout', function($http, $window){
  // TODO

  this.logout = function(callback) {
    $http({
    url: 'http://localhost:3000/logout?',
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      // sessionStorage.setItem('loggedIn', false);
      $window.location.reload();
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error in logout')
    });
  }
});
