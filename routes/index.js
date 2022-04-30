const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Hello, John!');
});


routes.use('/contacts', require('./contacts'));

module.exports = routes;