const express = require('express');                         // returns a method using express
const app = express();                                      // gets an express object from the mthod
const bodyParser = require('body-parser');                  // allows to retrieve information from html items
const path = require('path');                               // provides path functions

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8080);
app.set('view engine', 'html');

// Need to refactor mian.js (idk what it is use for)
const main_random = require('./main.js');
app.use(main_random);

// Finding recipes from Spoontacular API and sends information to html
const find_recipe_router = require('./find_recipe.js'); 
app.use(find_recipe_router);

// Uploading recipes
const upload_router = require('./upload.js');
app.use(upload_router);

// MongoDB -> storing recipes
// const recipe_mongodb_router = require('./recipe_mongodb.js');
// app.use(recipe_mongodb_router);
