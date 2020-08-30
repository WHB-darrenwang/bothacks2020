// Summary: Retrieves inputted food and outputs food recipes
const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const unirest = require('unirest');                 // allow http request and scrape JSON files
const path = require('path');                       // provides path functions
const MongoClient = require('mongodb').MongoClient; // connection required for MONGODB

/* Information and token keys (delete before pushing) */
const API_KEY = "919efab9946344bba142515dbd6cf12f"; // spoontacular api key (limit 160)

//MongoDB info
const MONGOD_USER = "JDeng88";  //"darren";
const MONGOD_PWD = "Ayylmao69";  //"darren123";
var DB_NAME_LOGIN = "RecipeStorage" //database name
const uri = "mongodb+srv://"+MONGOD_USER+":"+MONGOD_PWD+"@cluster0.6hxou.mongodb.net/"
            +DB_NAME_LOGIN+"?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

/* ----------------------------- GET requests ----------------------------- */

// Parameterized recipe link
router.get('/recipe/:food', function(req,res){
    const food = req.params.food;
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

router.get('/custom_recipe/:food', function(req,res){
    const food = req.params.food;
    console.log(food+' was recieved in custom food parameters');
    client.connect(err => {
        console.log('connected');
        if (err) throw err;
        const collection = client.db(DB_NAME_LOGIN).collection("customized_Recipes");
        collection.find({dish_Name:food}).toArray(function(err,results){
            if(err) throw err;
            res.render(__dirname + '/views/community', {Results: results}); // results is an array of recipes
        });
    });
    client.close();
});

/*; ----------------------------- POST requests ----------------------------- */

router.post('/search_recipe', function(req,res) {
    const food = req.body.input_dish.toLowerCase();
    console.log("entered " + food);
    if(req.body.dbSearch){
        res.redirect('/custom_recipe/'+food);
    }else{
        res.redirect('/recipe/'+food);
    }
});

router.post('/get_recipe/:id', function(req, res){
    const id = req.params.id;
    var request = unirest('GET','https://api.spoonacular.com/recipes/' + id + '/information?apiKey='
                                    +API_KEY);
    request.end(function(response){
        if(response.error) throw new Error(response.error);
        else{
            results = response.body;
            res.render(__dirname + '/views/recipe', {Result: results});
        }
    });
})

module.exports = router; 