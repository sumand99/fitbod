// Create a constant mongoose variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  email_add: String,
  workout_date: String,
  workout_duration: String
});

const Workouts = mongoose.model('workouts',workoutsSchema);

module.exports = Workouts;
