// Summary: Retrieves inputted food and outputs food recipes
const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const unirest = require('unirest');                 // allow http request and scrape JSON files
const path = require('path');                               // provides path functions

/* Information and token keys (delete before pushing) */
const API_KEY = "919efab9946344bba142515dbd6cf12f"; // spoontacular api key (limit 160)


/* ----------------------------- GET requests ----------------------------- */

// Parameterized recipe link
router.get('/recipe/:food', function(req,res){
    var food = req.params.food;
    console.log(food+" was recieved in paramters");
    var request = unirest('GET','https://api.spoonacular.com/recipes/complexSearch?apiKey='
                                    +API_KEY);
    request.query({'query':food,'number':'10'}); // offest = 0, number = 10
    request.end(function(response){
        if(response.error) throw new Error(response.error);
        else{
            results = response.body.results;
            res.render(__dirname + '/views/results', {Results: results});
        }
    });
});

/*; ----------------------------- POST requests ----------------------------- */

router.post('/search_recipe', function(req,res) {
    const food = req.body.input_dish;
    console.log("entered " + food);
    res.redirect('/recipe/'+food);
});

module.exports = router;