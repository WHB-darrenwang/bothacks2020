const express = require('express');                 // module for creating web application
const router = express.Router();                    // refactoring code
const MongoClient = require('mongodb');             // connection required for MONGODB
const path = require('path');                       // provides path functions

/* Information and token keys (delete before pushing) */
const MONGOD_USER = "xxxx";
const MONGOD_PWD = "xxxxx";
var DB_NAME_LOGIN = "RecipeStorage" //database name
const uri = "mongodb+srv://"+MONGOD_USER+":"+MONGOD_PWD
          +"@cluster0.6hxou.mongodb.net/"+DB_NAME_LOGIN+"?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//mongoDB async functions for storing and fetching data
async function storeRecipe(client,recipe_Data){
   client.connect(err => {
       if (err) throw err;
       const collection = client.db("recipeStorage").collection("customized_Recipes");
       collection.insertOne(recipe_Data, function(err, res) {
               if(err) throw err;
               console.log("Recipe has successfully registered.");
       });
   })
}

/*async function fetchRecipe(client, Recipe){
   const cursor = client.db("NameOfYourDB").collection("NameOfYourCollection").find({Recipe});
   const results = await cursor.toArray();
   collection.findOne({dishName : })
   if (results.length > 0) {
       results.forEach((result, i) => {

           console.log(result);
           // Here you could build your html or put the results in some other data structure you want to work with
       });
   } else {
       console.log(`No Recipe found`);
   }
} */

module.exports = router;
