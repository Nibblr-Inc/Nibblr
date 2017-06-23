
angular.module('createEvent', [])

.controller('AppCtrl', ["searchRestaurants", function(searchRestaurants) {
  // search Restaurants search test passed
  // searchRestaurants.search('pizza', function(data) {
  //   console.log('search data: ', data);
  // })

  // this.login = login;

}])

.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/app.html'
  }

})
