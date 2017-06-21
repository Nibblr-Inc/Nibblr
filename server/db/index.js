var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'nibblr'
});

connection.connect();

module.exports = connection;
