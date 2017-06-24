angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '='
    },

    controller: function(rsvpRequests, eventsRequests, $scope) {
      this.rsvpClick = (id) => {
        console.log('$scope.$parent.$parent.rsvpClick',$scope.$parent.$parent.rsvpClick)
        $scope.$parent.$parent.rsvpClick = true;
        console.log('in rsvp click function')
        rsvpRequests.postRSVP({event_id: id}, function(data){
          if (data.status === 201) {
            alert('Success!')
            eventsRequests.getEvents({event_id: id}, function({data}) {
              console.log('data: ', data[0].rsvp_usernames)
              console.log('event data: ', this.event)
              this.event.rsvp_usernames = data[0].rsvp_usernames;
            }.bind(this))

          } else if (data.status === 400) {
            alert("You're already RSVP'd for this event")

          } else {
            alert('Please login to RSVP')
          }
        }.bind(this))
      }

      console.log('$scope in eventView: ', $scope)


    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
