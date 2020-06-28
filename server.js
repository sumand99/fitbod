const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const apiRoutes = require('./routes/api-routes');
//const workouts = require('./model/workouts.js');

const port = process.env.PORT || 5000;
const app = express();



app.set('view engine','ejs');


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});



app.use('/api', apiRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, function() {
  console.log("process.env.PORT = " + port);
  console.log("Server is running on Port: " + port);
});
