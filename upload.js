const express = require('express');                           // module for creating web application
const router = express.Router();                              // refactoring code
const path = require('path');
const MongoClient = require('mongodb').MongoClient;           // connection required for MONGODB                             // provides path functions

//MongoDB info
const MONGOD_USER = "xxxxx";
const MONGOD_PWD = "xxxxx";
var DB_NAME_LOGIN = "RecipeStorage" //database name
const uri = "mongodb+srv://"+MONGOD_USER+":"+MONGOD_PWD
           +"@cluster0.6hxou.mongodb.net/"+DB_NAME_LOGIN+"?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

router.get('/upload', function(req, res){
    res.sendFile(path.join(__dirname+'/views/upload.html'));
});

router.post('/upload_recipe', function(req, res){
    const inp_dishName = req.body.dishName;
    const inp_dishDescription = rxeq.body.dishDescription;
    const inp_ingredients = req.body.ingredients;
    const inp_steps = req.body.steps;
    var receipe_Data = {
        dish_Name : inp_dishName,
        dish_Description : inp_dishDescription,
        dish_ingredients : inp_ingredients,
        dish_steps : inp_steps
    }; //json format information for the receipe

    client.connect(err => {
        if (err) throw err;
        const collection = client.db(DB_NAME_LOGIN).collection("customized_Receipes");
        collection.insertOne(receipe_Data, function(err, res) {
                if(err) throw err;
                console.log("Receipe has successfully registered.");
        });
    });
    client.close();
    res.redirect('/');
});


module.exports = router;