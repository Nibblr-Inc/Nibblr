angular.module('nibblr')

.directive('eventListEntry', function() {
  return {
    // scope: {
    //   event: '<'
    // },
    controller: function($scope) {
      $scope.showDescription = false;
      $scope.toggleDescription = function(e) {
        $scope.showDescription = !$scope.showDescription;
      };
      $scope.parseDate = function() {
        var date = new Date($scope.event.event_time);
        return date.toDateString();
      }
      $scope.parseTime = function() {
        var date = new Date($scope.event.event_time);
        return date.toLocaleTimeString().replace(':00 ',' ');
      }

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventListEntry.html'
  }

});
