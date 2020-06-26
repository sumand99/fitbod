const express = require("express");
const app = express();

const port = 4000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('home');
});


app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
