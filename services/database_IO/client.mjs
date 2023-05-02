import { DATABASE_CONFIG } from "../../config/database.mjs";
import { MongoClient, ObjectId } from "mongodb";
import { createHash } from "crypto";

const HOST = DATABASE_CONFIG.host;
const PORT = DATABASE_CONFIG.port;
const PATH = DATABASE_CONFIG.path;
const CLIENT_URI = `mongodb://${HOST}:${PORT}/${PATH}`;


class MongoDBClient extends MongoClient {
    constructor () {
        super(CLIENT_URI);
    }

    createObjectHash(_object) {
        const objectString = JSON.stringify(_object);
        const hash = createHash("sha256");
        hash.update(objectString);
        return hash.digest("hex").slice(0, 16);
    }

    async aggregate(collectionName, pipeline) {
        let response = [];
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);

            response = collection.aggregate(pipeline);
            response = await response.toArray();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            await this.close();
            return response;
        }
    }

    async find(collectionName, _query, _projection = {_id : 1}, _sort = {} ) {
        let response = [];
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);

            _projection = {projection : _projection}
            response = collection.find(_query, _projection).sort(_sort);

            response = await response.toArray();

        }
        catch (err) {
            console.log(err);
        }
        finally {
            await this.close();
            return response;
        }
    }

    async updateRecord(collectionName, _filter, _update) {
        let response = {};
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);
            
             response = await collection.updateOne(_filter, _update);
        }
        catch (err) {
            response.error = err;
            console(err);
        }
        finally{
            await this.close();
            return response;
        }

    }

    async insertOne(collectionName, object) {
        let response = {};
        try{
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);

            response = await collection.insertOne(object);
        
        }
        catch (err) {
            response.error = err;
            console(err);
        }
        finally{
            await this.close();
            return response;
        }
    }
}

export {MongoDBClient, ObjectId};
