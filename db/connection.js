// .env variables
const dotenv = require('dotenv');
dotenv.config();

let _client;
let _collection;

// const {MongoClient} = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const initDatabse = () => {

};

const getCollection = () => {
    return _collection;
}

async function main() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db5mf.mongodb.net/myFirstDatabase?
    retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

 /*   try {
    await client.connect();
    await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }*/
}

main().catch(console.error);

/* async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};*/

module.exports = {initDatabse, getCollection};