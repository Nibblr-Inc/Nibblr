angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function() {},
    templateUrl: 'client/src/templates/eventView.html'
  }
})
