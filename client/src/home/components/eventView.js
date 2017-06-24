angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function(rsvpRequests) {
      this.rsvpClick = (id) => {
        console.log('in rsvp click function')
        rsvpRequests.postRSVP({event_id: id}, function(data){
          if (data.status === 201) {
            alert('Success!')
          } else {
            alert('Login to RSVP')
          }
        })
      }

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
