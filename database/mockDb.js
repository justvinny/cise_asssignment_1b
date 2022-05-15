const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Practice = require("../models/Practice");
const Article = require("../models/Article");

/**
 * Connect to the in-memory database.
 */
module.exports.connectMockDb = async () => {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri, {dbName: "mockDatabase"});
}

/**
 * Populates MongoDB Memory Server with Mock Data.
 */
module.exports.populateMockData = async () => {
    try {
        const {mockArticles, mockPractices} = require("./mockData");
        Practice.insertMany(mockPractices);
        Article.insertMany(mockArticles);
    } catch(error) {
        console.error(error);
    }
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}
