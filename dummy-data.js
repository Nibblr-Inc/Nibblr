 var dummyData = [{
  eventID: 1,
  eventName: 'this is an event'
  datetime: '2017:10:07 06:06:06',
  location: 1, // api location id
  creator: 1,
  description: 'this is a description',
  rsvps: [{username: 'bob'}, {username: 'bill'}]
},
{
 eventID: 2,
 eventName: 'this is another event'
 datetime: '2017:10:07 07:06:06',
 location: 1, // api location id
 creator: 1,
 description: 'this is another description',
 rsvps: [{username: 'jill'}, {username: 'jill'}]
}]

module.exports = dummyData;
