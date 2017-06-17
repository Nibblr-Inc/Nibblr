angular.module('nibblr')

.directive('event', function() {
  return {
    scope: {
      event: <
    },
    controller: function() {
      console.log('in angular module')
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/templates/event.html'
  }

});
