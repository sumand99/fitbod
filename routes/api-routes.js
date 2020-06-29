//'use strict';
const router = require('express').Router();
const Workouts = require("../model/workouts");
const Fitboduser = require("../model/fitboduser");

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// API version
router.get('/version', (req, res) => {
    // handle with passport
    res.send('API V1.0');
});

// API version
router.route("/addworkout").post(function(req, res) {});

//fetch workout data
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

//edit workoutdata
router.route("/updateworkout").post(function(req, res) {
console.log("req =" + req);
  var response = {
      email: req.body.email,
      duration: req.body.duration
   };
   console.log(response);
   res.end(JSON.stringify(response));
});


//fetch Users
router.route("/fitboduser").get(function(req, res) {
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
