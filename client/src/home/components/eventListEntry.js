angular.module('nibblr')

.directive('eventListEntry', function() {
  return {
    // scope: {
    //   event: '<',
    //
    // },
    controller: function($scope) {
      $scope.showDescription = false;
      $scope.rsvpClick = false;
      $scope.toggleDescription = function(e) {
        if (!$scope.rsvpClick) {
          $scope.showDescription = !$scope.showDescription;
        } else {
          $scope.rsvpClick = false;
        }
      };
      $scope.parseDate = function() {
        var date = new Date($scope.event.event_time);
        return date.toDateString();
      }
      $scope.parseTime = function() {
        var date = new Date($scope.event.event_time);
        return date.toLocaleTimeString().replace(':00 ',' ');
      }

      console.log('$scope in eventList: ', $scope)

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventListEntry.html'
  }

});
