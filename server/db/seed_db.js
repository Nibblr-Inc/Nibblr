var controller = require('../controllers/index.js');

controller.users.post({body: {username: 'mike', password: 'abc'}})
controller.users.post({body: {username: 'nate', password: '123'}})
controller.users.post({body: {username: 'molly', password: 'abc123'}})

setTimeout(function() {
  controller.events.post({body: {name: 'first event', event_time: '2017-07-04 12:30:00', location: 'Home Slice', google_place_id: 'madeupid', description: 'this is a test', address: '304 W Mary St', category: 'pizza', photo_url: 'https://lh3.googleusercontent.com/p/AF1QipPloRke1QOxtAbYX27sHiVtUV2uOHS4dcWPDkYA=s1600-w512-h1363'}, session: {user_id: 1}})
  controller.events.post({body: {name: 'second event', event_time: '2017-07-05 4:30:00', location: 'Lazurus', google_place_id: 'madeupid2', description: 'this is a test2', address: '304 E Mary St', category: 'mexican', photo_url: 'https://lh3.googleusercontent.com/p/AF1QipPloRke1QOxtAbYX27sHiVtUV2uOHS4dcWPDkYA=s1600-w512-h1363'}, session: {user_id: 2}})
}, 100);

setTimeout(function() {
  controller.rsvp.post({body: {event_id: 1}, session: {user_id: 2}})
  controller.rsvp.post({body: {event_id: 1}, session: {user_id: 3}})
}, 200);

//first run mysql -u root -p < schema.sql then this file in command line
