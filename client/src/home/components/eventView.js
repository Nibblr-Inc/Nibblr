angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function() {},
    restrict: 'E',
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
