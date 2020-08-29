const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const path = require('path');                               // provides path functions

router.get('/upload', function(req, res){
    res.sendFile(path.join(__dirname+'/views/upload.html'));
})

router.post('/upload_recipe', function(req, res){
    res.write("recipe sucessfuly uploaded");
})

module.exports = router;
