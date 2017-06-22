angular.module('nibblr')

.service('login', function($http){
  // TODO

  this.login = function(body, callback) {
    $http({
    // body should be obj with keys: username, password
    url: makeQueryString('http://localhost:3000/login?', query),
    method: 'POST',
    dataType: 'json',
    data: body,
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error')
    });
  }
});
