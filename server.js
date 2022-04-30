const connect = require('./db/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db5mf.mongodb.net/myFirstDatabase?
retryWrites=true&w=majority`;
MongoClient.connect(uri, function(err,db) {
    if (err) throw err;
    var dbo = db.db("contacts");
    dbo.collection("contacts").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db. close();
    });
});