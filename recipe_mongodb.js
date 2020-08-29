// /* const express = require('express');                 // module for creating web application
// const router = express.Router();                    // refactoring code
// const MongoClient = require('mongodb');             // connection required for MONGODB
// const path = require('path');                               // provides path functions

// /* Information and token keys (delete before pushing) */
// const MONGOD_USER = "xxxxxx";
// const MONGOD_PWD = "xxxxxx";
// var DB_NAME_LOGIN = "RecipeStorage" //database name


// async function main(){    
//     const uri = "mongodb+srv://"+MONGOD_USER+":"+MONGOD_PWD+"@cluster0.jd51y.mongodb.net/"+DB_NAME_LOGIN+"?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }


// main().catch(console.error);

// //mongoDB async functions for storing and fetching data
// async function storeReceipe(client,receipe_Data){
//     client.connect(err => {
//         if (err) throw err;
//         const collection = client.db("receipeStorage").collection("customized_Receipes");
//         collection.insertOne(receipe_Data, function(err, res) {
//                 if(err) throw err;
//                 console.log("Receipe has successfully registered.");
//         });
//     })
// }

// async function fetchReceipe(client, Receipe){
//     const cursor = client.db("NameOfYourDB").collection("NameOfYourCollection").find({Receipe});
//     const results = await cursor.toArray();
//     collection.findOne({dishName : })
//     if (results.length > 0) {
//         results.forEach((result, i) => {

//             console.log(result);
//             // Here you could build your html or put the results in some other data structure you want to work with
//         });
//     } else {
//         console.log(`No Receipe found`);
//     }
// }

// module.exports = router;
