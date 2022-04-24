const express = require('express');
const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) =>{
    res.send('Hello, John');
});

module.exports = routes;