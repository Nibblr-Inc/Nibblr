angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function() {},
    restrict: 'E',
    templateUrl: 'client/src/templates/eventView.html'
  }
})
