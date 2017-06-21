angular.module('nibblr')

.directive('eventListEntry', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function($scope) {
      $scope.showDescription = false;
      $scope.toggleDescription = function() {
        $scope.showDescription = !$scope.showDescription;
      };
      console.log('eventListEntry',this)
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventListEntry.html'
  }

});
