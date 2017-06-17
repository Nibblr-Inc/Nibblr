angular.module('nibblr')

.directive('events', function() {
  return {
    scope: {
      events: <
    },
    controller: function() {
      console.log('in angular module')
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/templates/events.html'
  }

});
