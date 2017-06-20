var dummyData = [{
 eventID: 1,
 eventName: 'this is an event',
 datetime: '2017:10:07 06:06:06',
 location: 1, // api location id
 creator: 1,
 description: 'this is a description',
 rsvps: ['bob', 'bill']
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
eventID: 2,
eventName: 'this is another event',
datetime: '2017:10:07 07:06:06',
location: 1, // api location id
creator: 1,
description: 'this is another description',
rsvps: ['jill', 'jane']
}
];

angular.module('nibblr', [])

.controller('AppCtrl', ["searchRestaurants", function(searchRestaurants) {
  this.events = dummyData;
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
