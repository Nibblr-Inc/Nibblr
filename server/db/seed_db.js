var controller = require('../controllers/index.js');

controller.users.post({body: {username: 'mike', password: 'abc'}})
controller.users.post({body: {username: 'nate', password: '123'}})
controller.users.post({body: {username: 'molly', password: 'abc123'}})

setTimeout(function() {
  controller.events.post({body: {name: 'first event', event_time: '2017-07-04 12:30:00', location: 'Home Slice', google_place_id: 'madeupid', description: 'this is a test', creatorID: 1, address: '304 W Mary St', category: 'pizza', photo_url: 'asdfasd'}})
  controller.events.post({body: {name: 'second event', event_time: '2017-07-05 4:30:00', location: 'Lazurus', google_place_id: 'madeupid2', description: 'this is a test2', creatorID: 2, address: '304 E Mary St', category: 'mexican', photo_url: 'adsfafds'}})
}, 100);

setTimeout(function() {
  controller.rsvp.post({body: {user_id: 2, event_id: 1}})
  controller.rsvp.post({body: {user_id: 3, event_id: 1}})
}, 200);

//first run mysql -u root -p < schema.sql then this file in command line
