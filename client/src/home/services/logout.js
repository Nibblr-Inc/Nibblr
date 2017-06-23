angular.module('nibblr')

.service('logout', function($http){
  // TODO

  this.logout = function(callback) {
    $http({
    url: 'http://localhost:3000/logout?',
    method: 'GET',
    dataType: 'json',
    }).then(function successCallback(response) {
      sessionStorage.clear();
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error in logout')
    });
  }
});
