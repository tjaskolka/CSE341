const connect = require('./db/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connection = require('./db/connection');

connection.initDatabase();

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

