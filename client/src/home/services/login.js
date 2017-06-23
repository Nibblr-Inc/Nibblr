angular.module('nibblr')

.service('login', function($http){
  // TODO

  this.login = function(body, callback) {
    // var makeQueryString = function(url, params) {
    //   var paramsArray = []
    //   for (p in params) {
    //     paramsArray.push(p + '=' + params[p]);
    //   }
    //   return url + paramsArray.join('&');
    // }
    $http({
    // body should be obj with keys: username, password
    url: 'http://localhost:3000/login?',
    method: 'POST',
    dataType: 'json',
    data: body,
    }).then(function successCallback(response) {
      if (callback) {
        callback(response);
      }
    }, function errorCallback(response) {
      console.log('=( error', body, response)
    });
  }
});
