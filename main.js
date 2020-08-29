const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const MongoClient = require('mongodb');             // connection required for MONGODB
const path = require('path');                               // provides path functions

/* ----------------------------- GET requests ----------------------------- */
// Home page
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/views/main.html'));
});

/* ----------------------------- POST requests ----------------------------- */

// search recipe by cost breakdown
/*
    router.post(function(req, res) {
        console.log("PostRecipeCostRoute is invoked.");
        
        session = req.session();
        recipe = session.attribute(input_dish.ID)

        reqLink = 'https://api.spoonacular.com/recipes/' + recipe + '/complexSearch?apiKey=' + API_KEY);
        var request = unirest('GET', reqLink);

        recipes = [];

        for (parse 'n' recipes under the 'c' category) {
            totalSum = 0;
            for (i in ingredients) {
                totalSum += i.price;
            }
            if (totalSum > max) {
                pass;
            } else {
                var recipe = {
                    'name': <n.id>
                    'cost': totalSum
                };
                recipes.push(recipe);
            }
        }
``
        recipes.sort();
    });
 */

 module.exports = router;