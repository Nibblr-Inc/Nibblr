angular.module('nibblr')

.directive('eventList', function() {
  return {
    scope: {
      events: '<'
    },
    controller: function() {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/templates/eventList.html'
  }

});
