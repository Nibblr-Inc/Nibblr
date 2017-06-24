angular.module('nibblr')

.directive('eventList', function() {
  return {
    scope: {
      events: '='
    },
    controller: function() {
      console.log('eventList events', this)
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventList.html'
  }

});
