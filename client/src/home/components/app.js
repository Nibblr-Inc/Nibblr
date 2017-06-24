var dummyData = [
{
  id: 3,
  name: 'first event',
  event_time: '2017-07-04T17:30:00.000Z',
  location: 'Home Slice',
  google_place_id: 'madeupid',
  description: 'this is a test',
  creatorID: 1,
  address: '304 W Mary St',
  category: 'pizza',
  username: 'mike',
  rsvp_user_id: [2],
  rsvp_usernames: ['nate']
}
];

angular.module('nibblr', [])

.controller('AppCtrl', ["$scope", "eventsRequests", "logout", function($scope, eventsRequests, logout) {
  this.events = dummyData;
  eventsRequests.getEvents(function(data) {
    console.log('event data: ', data.data)
    this.events = data.data;
  }.bind(this))

  $scope.showLogout = true;

  // var sessionTest = sessionStorage.getItem('loggedIn');
  // console.log('login status', sessionTest)

  console.log('$scope.showLogout', $scope.showLogout)

  this.logoutClick = () => {
    console.log('in logout click')
    logout.logout(function(data){
      console.log('data', data);
      if (data.data === 'logged out') {
        console.log('Now logged out')
      }
    });
  }

  this.redirectToCreate = () => {
    eventsRequests.redirectToCreate();
  }


}])

.directive('app', function() {
  return {
    scope: {
    },
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/app.html'
  }

})
