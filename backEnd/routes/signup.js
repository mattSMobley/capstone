'use strict';
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

function signUp(req, res, next) {
  var newUser = {
    email: req.body.email
  };

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    newUser.password = hash;
    addUser();
  });



  //check to see if email already exists in DB
  function addUser() {
    knex('users')
      .select()
      .where('email', newUser.email)
      .limit(1)
      .then(function(data) {
        if (data.length === 0) {
          return knex('users')
            .insert(newUser);
        } else {
          res.send({
            message: 'Email account already in use!!'
          });
        }
      })
      .then(function(insertStatus) {
        res.json(insertStatus);
      })
      .catch(function(error) {
        console.log(error);
      });
      // if not, then insert with KNEX
  }
}



module.exports = signUp;
