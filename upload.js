const express = require('express');                           // module for creating web application
const router = express.Router();                              // refactoring code
const path = require('path');                                 // provides path functions
const MongoClient = require('mongodb').MongoClient;           // connection required for MONGODB                             

//MongoDB info
const MONGOD_USER = "darren";
const MONGOD_PWD = "darren123";
var DB_NAME_LOGIN = "RecipeStorage" //database name
const uri = "mongodb+srv://"+MONGOD_USER+":"+MONGOD_PWD+"@cluster0.6hxou.mongodb.net/"
            +DB_NAME_LOGIN+"?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

router.get('/upload', function(req, res){
    res.sendFile(path.join(__dirname+'/views/upload.html'));
});

router.post('/upload_recipe', function(req, res){
    const inp_dishName = req.body.dishName.toLowerCase();
    const inp_dishDescription = req.body.dishDescription;
    const inp_ingredients = req.body.ingredients;
    const inp_steps = req.body.steps;
    var receipe_Data = {
        dish_Name : inp_dishName,
        dish_Description : inp_dishDescription,
        dish_ingredients : inp_ingredients,
        dish_steps : inp_steps
    }; //json format information for the receipe
    console.log("connecting");
    console.log('going to store ' + receipe_Data);
    client.connect(err => {
        if (err) throw err;
        const collection = client.db(DB_NAME_LOGIN).collection("customized_Receipes");
        collection.insertOne(receipe_Data, function(err, res) {
                if(err) throw err;
                console.log("Receipe has successfully registered.");
        });
    });
    client.close();
    res.redirect('/upload');
});


module.exports = router;