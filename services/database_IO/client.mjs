import { DATABASE_CONFIG } from "../../config/configuration.mjs";
import { MongoClient, ObjectId } from "mongodb";
import { createHash } from "crypto";

const CLIENT_URI = DATABASE_CONFIG.CONNECTION_STRING;
const DATABASE_NAME = DATABASE_CONFIG.DATABASE_NAME;

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
            if (!this.topology.isConnected()) {
                await this.connect();
            }

            const database = this.db(DATABASE_NAME);
            const collection = database.collection(collectionName);

            response = collection.aggregate(pipeline);
            response = await response.toArray();
        }
        catch (err) {
            console.log(err);
            response = [];
        }
        finally {
            return response;
        }
    }

    async find(collectionName, _query, _projection = {_id : 1}, _sort = {} ) {
        let response = [];
        try {
            if (!this.topology.isConnected()) {
                await this.connect();
            }

            const database = this.db(DATABASE_NAME);
            const collection = database.collection(collectionName);

            _projection = {projection : _projection}
            response = collection.find(_query, _projection).sort(_sort);

            response = await response.toArray();

        }
        catch (err) {
            console.log(err);
            response = [];
        }
        finally {
            return response;
        }
    }

    async updateRecord(collectionName, _filter, _update) {
        let response = {};
        try {
            if (!this.topology.isConnected()) {
                await this.connect();
            }

            const database = this.db(DATABASE_NAME);
            const collection = database.collection(collectionName);
            
             response = await collection.updateOne(_filter, _update);
        }
        catch (err) {
            console(err);
            response = [];
        }
        finally{
            return response;
        }

    }

    async updateProfile(collectionName, _id, _update) {
        let response = {};
        try {
            if (!this.topology.isConnected()) {
                await this.connect();
            }
    
            const database = this.db(DATABASE_NAME);
            const collection = database.collection(collectionName);
            
            response = await collection.updateOne({ _id: new ObjectId(_id) }, { $set: _update });
        } catch (err) {
            console.error(err);
            response = [];
        } finally {
            return response;
        }
    }

    async insertOne(collectionName, object) {
        let response = {};
        try{
            if (!this.topology.isConnected()) {
                await this.connect();
            }
            
            const database = this.db(DATABASE_NAME);
            const collection = database.collection(collectionName);

            response = await collection.insertOne(object);
        
        }
        catch (err) {
            console(err);
            response = [];
        }
        finally{
            return response;
        }
    }
}

export {MongoDBClient, ObjectId};
