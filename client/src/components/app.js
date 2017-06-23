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

.controller('AppCtrl', ["searchRestaurants", "eventsRequests", "login", function(searchRestaurants, eventsRequests, login) {
  this.events = dummyData;
  eventsRequests.getEvents(function(data) {
    console.log('event data: ', data.data)
    this.events = data.data;
  }.bind(this))
  // search Restaurants search test passed
  // searchRestaurants.search('pizza', function(data) {
  //   console.log('search data: ', data);
  // })

  this.login = login;

}])

.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'client/src/home/templates/app.html'
  }

})
