angular.module('nibblr')

.service('searchRestaurants', function($http){
  // TODO

  var makeQueryString = function(url, params) {
    var paramsArray = []
    for (p in params) {
      paramsArray.push(p + '=' + params[p]);
    }
    return url + paramsArray.join('&');
  }

  this.search = function(query, callback) {
    $http({
    url: makeQueryString('http://localhost:3000/searchRestaurants?', {
      keyword: query || 'pizza'
    }),
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
});
