var express = require('express');
var Promise = require('bluebird');
var bcryptHash = Promise.promisify(require('bcrypt-nodejs').hash);
var bcryptCompare = Promise.promisify(require('bcrypt-nodejs').compare);
var dbControllers = require('../controllers/index.js')


//require this file in router for authentication routes

exports.createHash = function(password) {
  return bcryptHash(password, null, null)
  .then(function(hashedPass, err) {
    if(err) {
      console.log(err);
      return;
    }
    return hashedPass;
  })
}

exports.comparePasswords = function(password, hash){
  return bcryptCompare(password, hash);
}
