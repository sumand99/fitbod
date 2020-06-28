// Create a constant mongoose variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitboduserSchema = new Schema({
email_add: String
});

const Fitboduser = mongoose.model('fitboduser',fitboduserSchema);

module.exports = Fitboduser;
