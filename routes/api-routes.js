//'use strict';
const router = require('express').Router();
const Workouts = require("../model/workouts");
const Fitboduser = require("../model/fitboduser");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// API version
router.get('/version', (req, res) => {
    res.send('API V1.0');
});

//fetch workout data
router.route("/workouts").get(function(req, res) {
  console.log("Fetch all Workouts");
  Workouts.find(function(err, workout) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
    res.setHeader('Content-Type', 'application/json');
		res.json(workout); // return all employees in JSON format
	});

});

//fetch by email
router.route("/workouts/:emailid").get(function(req, res) {
  console.log("Fetch Workouts of="+req.params.emailid);
  var req = {
    email_add: req.params.emailid
  }
  Workouts.find(req, function(err, workout) {
		if (err)
			res.send(err)
		res.json(workout);
	});
});



//delete workout data with id
router.route("/workouts/:id").delete(function(req, res) {
  console.log("delete Workouts of="+req.params.id);
  var id = new mongoose.Types.ObjectId(req.params.id);
  Workouts.remove(id, function(err, workout) {
		if (err)
			res.send(err)
    else
		res.send('Successfully! workout data has been Deleted.');
	});
});

//edit workoutdata
router.route("/updateworkout").post(function(req, res) {
console.log("req =" + req);

   let id = new mongoose.Types.ObjectId(req.body.id);
   	var data = {
      email_add: req.body.email_add,
      //workout_date: '7/28/2020',
      workout_duration: req.body.workout_duration
   	}
   	// save the user
   	Workouts.findByIdAndUpdate(id, data, function(err, workout) {
   	if (err) throw err;

    console.log('Successfully! Employee updated - '+workout.email_add);
   	res.render('home');
   	});
});


//create new workouts
router.route("/addworkout").post(function(req, res) {
console.log("req =" + req.body.email_add +"--"+req.body.workout_duration);

  new Workouts({
    _id: new mongoose.Types.ObjectId(),
    email_add: req.body.email_add,
    workout_date: req.body.date,
		workout_duration: req.body.workout_duration
  }).save().then((workout) => {
      console.log('created new workout: ', workout);
      res.render('home');
    });
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
