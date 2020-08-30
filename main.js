const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const path = require('path');                               // provides path functions


router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/main.html'));
});



 module.exports = router;