// .env variables
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

// const {MongoClient} = require('mongodb');

const initDatabase = () => {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db5mf.mongodb.net/myFirstDatabase?
    retryWrites=true&w=majority`;
    MongoClient.connect(uri, (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = client.db("contacts").collection("contacts");
        console.log("DB Connection Successful");
    });


};

const getCollection = () => {
    return _collection;
}

/* async function main() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db5mf.mongodb.net/myFirstDatabase?
    retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

   try {
    await client.connect();
    await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}*/

// main().catch(console.error);


module.exports = {initDatabase, getCollection};