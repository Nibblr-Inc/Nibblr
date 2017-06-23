angular.module('createEvent')


.directive('restaurant', function() {
  return {
    scope: {
      entry: '<'
    },
    controller: function($scope) {
      console.log('entry: ', $scope.entry)
      // this.entry = $scope.entry
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/createEvent/templates/restaurant.html'
  }
})
