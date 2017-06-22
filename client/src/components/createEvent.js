angular.module('nibblr')

.controller('CreateCtrl', ['searchRestaurants', function(searchRestaurants) {

}])

.directive('createEvent', function() {
  return {
    scope: {},
    controller: 'CreateCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/templates/createEvent.html'
  }
})
