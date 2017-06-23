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

.controller('AppCtrl', ["$scope", "searchRestaurants", "eventsRequests", "logout", function($scope, searchRestaurants, eventsRequests, logout) {
  this.events = dummyData;
  eventsRequests.getEvents(function(data) {
    console.log('event data: ', data.data)
    this.events = data.data;
  }.bind(this))
  // search Restaurants search test passed
  // searchRestaurants.search('pizza', function(data) {
  //   console.log('search data: ', data);
  // })
  $scope.showLogout = true;

  this.logoutClick = () => {
    console.log('in logout click')
    // $scope.showLogout = false;
    console.log($scope.showLogout);
    logout.logout(function(data){
      console.log('data', data);
      if (data.data === 'logged out') {
        console.log('Now logged out')
      }
    });
  }
}])

.directive('app', function() {
  return {
    scope: {
      hideLogin: '<',
      showLogout: '<'
    },
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/app.html'
  }

})
