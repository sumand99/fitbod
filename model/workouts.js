/*// Create a constant mongoose variable
const mongoose = require('mongoose');

// Create the variable schema of workout.

var workoutSchema = new mongoose.Schema({
  email_add: String,
  workout_date: String,
  workout_duration:String
});

const Workout = mongoose.model('workout', workoutSchema);

module.export = Workout;
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  email_add: String,
  workout_date: String,
  workout_duration: String
});

const Workouts = mongoose.model('workouts',workoutsSchema);

module.exports = Workouts;
