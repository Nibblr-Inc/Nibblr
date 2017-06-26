angular.module('nibblr')

.directive('eventView', function() {
  return {
    scope: {
      event: '='
    },

    controller: function(rsvpRequests, eventsRequests, $scope) {
      // this.button = "RSVP";
      rsvpRequests.getSessionUser(function(user_id) {
        console.log('in get session User')
        if (this.event.rsvp_user_id) {
          var user_ids = this.event.rsvp_user_id.split(',')
          if (user_ids.includes(user_id.data.toString())) {
            this.button = "Cancel";
            console.log("this.cancelButton",this.cancelButton)
          } else {
            this.button = "RSVP";
          }
        }
      }.bind(this))

      this.rsvpClick = (id) => {
        console.log('$scope.$parent.$parent.rsvpClick',$scope.$parent.$parent.rsvpClick)
        $scope.$parent.$parent.rsvpClick = true;
        console.log('in rsvp click function')
        if (this.button === "RSVP") {
          rsvpRequests.postRSVP({event_id: id}, function(data){
            if (data.status === 201) {
              alert('Success!')
              this.button = "Cancel";
              eventsRequests.getEvents({event_id: id}, function({data}) {
                this.event.rsvp_usernames = data[0].rsvp_usernames;
              }.bind(this))

            } else if (data.status === 400) {
              alert("You're already RSVP'd for this event")
            } else {
              alert('Please login or log on to RSVP')
            }
          }.bind(this))
        } else {
          rsvpRequests.cancelRSVP({event_id: id}, function(data) {
            console.log('cancelRSVP data: ', data)
            if (data.status === 201) {
              alert('You have been removed from RSVP List')
              this.button = "RSVP";
              eventsRequests.getEvents({event_id: id}, function({data}) {
                this.event.rsvp_usernames = data[0].rsvp_usernames;
              }.bind(this))
           } else {
             alert('There was an error canceling your RSVP. I\'m sorry, but you have to go.')
           }
         }.bind(this));
        }
      }

      console.log('$scope in eventView: ', $scope)


    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/home/templates/eventView.html'
  }
})
