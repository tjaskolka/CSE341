const routes = require('express').Router();

routes.get('/', (req, res) =>{

    const dotenv = require('dotenv');
dotenv.config();

    const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db5mf.mongodb.net/myFirstDatabase?
retryWrites=true&w=majority`;
MongoClient.connect(uri, function(err,db) {
    if (err) throw err;
    var dbo = db.db("contacts");
    dbo.collection("contacts").find().toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
        db. close();
    });
});
});



module.exports = routes;