const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Hello, John');
});

module.exports = routes;