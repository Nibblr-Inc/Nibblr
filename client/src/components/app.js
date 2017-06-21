var dummyData = [{
 eventID: 1,
 eventName: 'this is an event',
 datetime: '2017-10-07 06:06:06',
 location: 1, // api location id
 creator: 1,
 description: 'this is a description',
 rsvps: ['bob', 'bill']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017-10-07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 3,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
{
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
},
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

.controller('AppCtrl', ["searchRestaurants", "eventsRequests", function(searchRestaurants, eventsRequests) {
  // this.events = dummyData;
  eventsRequests.getEvents(function(data) {
    console.log('event data: ', data)
    this.events = data;
  })
  // search Restaurants search test passed
  // searchRestaurants.search('pizza', function(data) {
  //   console.log('search data: ', data);
  // })
}])

.directive('app', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/src/templates/app.html'
  }

})
