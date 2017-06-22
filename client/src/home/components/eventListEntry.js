angular.module('nibblr')

.directive('event', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function($scope) {
      $scope.showDescription = false;
      $scope.toggleDescription = function() {
      $scope.showDescription = !$scope.showDescription;
    }
  },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventListEntry.html'
  }

});