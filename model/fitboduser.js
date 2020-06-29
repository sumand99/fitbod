// Create a constant mongoose variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email_add: String,
});

const Fitboduser = mongoose.model('users',userSchema);

module.exports = Fitboduser;
