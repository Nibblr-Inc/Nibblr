angular.module('nibblr')

.directive('eventListEntry', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function($scope) {
      $scope.showDescription = false;
      $scope.toggleDescription = function(e) {
        $scope.showDescription = !$scope.showDescription;
      };
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventListEntry.html'
  }

});
