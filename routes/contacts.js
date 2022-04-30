const routes = require('express').Router();
const connection = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

routes.get('/:id', (req, res) =>{

    const contactId = new ObjectId(req.params.id);
    const results = connection.getCollection().find({_id: contactId});

    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`Returned contact ${req.params.id}`);
    });
});

routes.get('/', (req, res) =>{

    const results = connection.getCollection().find();
    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log("Returned all contacts");
    });
});

module.exports = routes;