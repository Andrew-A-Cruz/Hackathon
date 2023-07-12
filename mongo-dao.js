const mongodb = require("mongodb"); // mongo client library  
const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "hackathon";
const collection = 'orders';

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    orders = db.collection(collection);
}
startup();

// retrieve all orders
module.exports.findAllOrders = function (callback) {
    let dataPromise = orders.find({}).toArray();
    dataPromise.then((orders) => callback(orders));
};

// retrieve 1 order
module.exports.findOrder = function (id, callback) {
    let dataPromise = orders.findOne({"order_id":parseInt(id)});
    dataPromise.then((order) => callback(order));
};