const { MongoClient } = require("mongodb");

class MongoDB {
    static connet = async(uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connet(uri);
        return this.client;
    };
}

module.exports = MongoDB