const routes = require('express').Router();
const connection = require('../db/connection');

routes.get('/', (req, res) =>{

    connection.getCollection().find().toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        console.log("Contacts query made");
//        db. close();
    });
});

module.exports = routes;