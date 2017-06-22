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

  this.search = function(keyword, callback) {
    $http({
    url: makeQueryString('http://localhost:3000/searchRestaurants?', {
      keyword: keyword || 'pizza'
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

  this.getImage = function(query, callback) {
    // query is obj with height, width, and photo_reference keys.  Height and width are optional.
    $http({
      url: makeQueryString('http://localhost:3000/getImage?', query),
      method: 'GET',
    }).then(function successCallback(response) {
      if (callback) {
        callback(response)
      }, function errorCallback(response) {
        console.log('=( error')
      }
    })
  }
});
