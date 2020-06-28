// Create a constant mongoose variable
/*const mongoose = require('mongoose');

// Create the variable schema for Users.
var usersSchema = new mongoose.Schema({
  googleId: String,
  username: String
});

const Users = mongoose.model('users', usersSchema);
module.export = Users;
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
//  username: String,
//  googleId: String
});

const User = mongoose.model('user',userSchema);

module.exports = User;
