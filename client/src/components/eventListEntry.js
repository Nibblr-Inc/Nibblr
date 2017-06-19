angular.module('nibblr')

.directive('event', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function() {
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/templates/eventListEntry.html'
  }

});
