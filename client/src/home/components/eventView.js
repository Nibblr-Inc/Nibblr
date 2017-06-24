angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '<'
    },
    controller: function(rsvpRequests) {
      this.rsvpClick = (id, rsvp_user_id, creatorID) => {
        console.log('in rsvp click function')
        rsvpRequests.postRSVP({event_id: id, rsvp_user_id: rsvp_user_id, creatorID: creatorID}, function(data){
          if (data.status === 201) {
            alert('Success!')
          } else if (data.status === 400) {
            alert("You're already RSVP'd for this event")
          } else {
            alert('Please login to RSVP')
          }
        })
      }

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
