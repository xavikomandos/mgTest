const mongoString = "mongodb+srv://garnuch:<garnuch123>@xavigarnuch.rldhrtz.mongodb.net/?retryWrites=true&w=majority";

const {MongoClient} = require('mongodb');

const client = new MongoClient(mongoString);

async function main() {

    await client.connect();

    await client.close();

}
main();