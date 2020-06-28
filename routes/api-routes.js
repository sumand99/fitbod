//'use strict';
const router = require('express').Router();
const Workouts = require("../model/workouts");
const Fitboduser = require("../model/fitboduser");

// API version
router.get('/version', (req, res) => {
    // handle with passport
    res.send('API V1.0');
});

// API version
router.route("/addworkout").post(function(req, res) {});

//fetchdata
router.route("/workouts").get(function(req, res) {
  console.log("Fetch all Workouts");

  Workouts.find()
  .then(workouts => {
      res.send(workouts);
  }).catch(err => {
      res.status(500).send({
          message: err.message
      });
  });
});

//fetchdata
router.route("/users").get(function(req, res) {
  console.log("Fetch all Users");

  Fitboduser.find()
  .then(fitboduser => {
      res.send(fitboduser);
  }).catch(err => {
      res.status(500).send({
          message: err.message
      });
  });
});

module.exports = router;
