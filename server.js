const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('home');
});


app.listen(port, function() {
  console.log("process.env.PORT = " + port);
  console.log("Server is running on Port: " + port);
});
