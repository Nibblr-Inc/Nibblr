angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function(rsvpRequests) {
      this.rsvpClick = () => {
        
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
