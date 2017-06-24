var controller = require('../controllers/index.js');

controller.users.post({body: {username: 'mike', password: 'abc'}})
controller.users.post({body: {username: 'nate', password: '123'}})
controller.users.post({body: {username: 'molly', password: 'abc123'}})

setTimeout(function() {
  controller.events.post({body: {name: 'Epic Sandwiches', event_time: '2017-07-04 12:30:00', location: 'Cenote', google_place_id: 'madeupid', description: 'good music, bad a/c', address: '1010 E Cesar Chavez St, Austin, TX 78702', category: 'misc', photo_url: 'https://lh3.googleusercontent.com/p/AF1QipPloRke1QOxtAbYX27sHiVtUV2uOHS4dcWPDkYA=s1600-w512-h1363'}, session: {user_id: 1}})
  controller.events.post({body: {name: 'Bomb Tacos', event_time: '2017-07-05 4:30:00', location: 'Lazurus', google_place_id: 'madeupid2', description: 'sparkly deer, good beer', address: '1902 E 6th St, Austin, TX 78702', category: 'mexican', photo_url: 'https://lh3.googleusercontent.com/p/AF1QipPloRke1QOxtAbYX27sHiVtUV2uOHS4dcWPDkYA=s1600-w512-h1363'}, session: {user_id: 2}})
}, 100);

setTimeout(function() {
  controller.rsvp.post({body: {event_id: 1}, session: {user_id: 2}})
  controller.rsvp.post({body: {event_id: 1}, session: {user_id: 3}})
}, 200);

//first run mysql -u root -p < schema.sql then this file in command line
