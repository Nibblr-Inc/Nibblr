var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'a',
  database: 'nibblr'
});

connection.connect();

module.exports = connection;
