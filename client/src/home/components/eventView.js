angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '='
    },
    controller: function(rsvpRequests, eventsRequests) {
      this.rsvpClick = (id) => {
        console.log('in rsvp click function')
        rsvpRequests.postRSVP({event_id: id}, function(data){
          if (data.status === 201) {
            alert('Success!')
            eventsRequests.getEvents({event_id: id}, function({data}) {
              console.log('data: ', data[0].rsvp_usernames)
              console.log('event data: ', this.event)
              this.event.rsvp_usernames = data[0].rsvp_usernames;
            }.bind(this))
          } else {
            alert('Login to RSVP')
          }
        }.bind(this))
      }

    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
