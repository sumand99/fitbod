const mongoose = require('mongoose').set('debug', true);
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  _id: mongoose.ObjectId,
  email_add: String,
  workout_date: String,
  workout_duration: String
});

const Workouts = mongoose.model('workouts',workoutsSchema);
module.exports = Workouts;
