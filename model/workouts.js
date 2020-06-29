// Create a constant mongoose variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  email_add: String,
  workout_date: String,
  workout_duration: String
});

module.exports = {
     editData:function(editId,callback){
        var userData= userTable.findById(editId);
        userData.exec(function(err, data){
         if(err) throw err;
         return callback(data);
      })
     },
     updateData:function(inputData, editId, callback){

      userData= userTable.findByIdAndUpdate(editId, inputData);
      userData.exec(function(err, data){
        if (err) throw err;
         return callback(data);
      })
   }

}
const Workouts = mongoose.model('workouts',workoutsSchema);

module.exports = Workouts;
