// Create a constant variable for the express server
const express = require('express');
var router = express.Router();

// Handle the Get request from the server
router.get('/', (req, res) => {
res.render("views/addOrEdit",{
viewTitle: "Insert Workout Information"
});
});

// Create a method post to get the form action of the express-handlebars
router.post('/', (req,res)=> {
console.log(req.body)
})

// Export to call the function in the root file.
module.exports = router;
