const express = require('express');
const app = express();
/* const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const port = process.env.PORT || 5000;

const professionalRoutes = require('./routes/professional');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
*/
app.listen(5000, () => {
  console.log('listening on 5000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(__dirname);
});
