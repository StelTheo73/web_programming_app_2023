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
        let output = [];
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);

            output = collection.aggregate(pipeline);
            output = await output.toArray();
        }
        catch (err) {
            console.log(err);
        }
        finally {
            await this.close();
            return output;
        }
    }

    async find(collectionName, _query, _projection = {_id : 1}, _sort = {} ) {
        let output = [];
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);

            _projection = {projection : _projection}
            output = collection.find(_query, _projection).sort(_sort);

            output = await output.toArray();

        }
        catch (err) {
            console.log(err);
        }
        finally {
            await this.close();
            return output;
        }
    }

    async updateRecord(collectionName, _filter, _update) {
        let response = {};
        try {
            await this.connect();
            const database = this.db();
            const collection = database.collection(collectionName);
            
            await collection.updateOne(_filter, _update);
            response["status"] = "successful";

        }
        catch (err) {
            response["status"] = "failed";
            response["error"] = err;
            console(err);
        }
        finally{
            await this.close();
            return response;
        }

    }

}

// const pipeline = [
//     {
//         $match : {
//             person_id : new ObjectId("642d12fd9f0c2c52ba5b81f6")
//         }
//     },
//     {
//         $lookup : {
//             from : "shops",
//             localField : "shop_id",
//             foreignField : "_id",
//             as : "shop"
//         }
//     },
//     {
//         $unwind : "$shop"
//     },
//     {
//         $project : {
//             shop_id : 1,
//             shop_name : "$shop.name",
//             shop_address : "$shop.address",
//             shop_phone : "$shop.phone",
//             shop_email : "$shop.email",
//             _id : 1,
//             datetime : 1,
//             status : 1,
//             order_contains : 1,
//             address : 1,
//             payment_mean : 1,
//             card : 1,
//             person_id : 1,
//             rating : 1
//         }
//     },
//     {
//         $sort : {
//             datetime : -1
//         }
//     }
// ];
// const collectionName = "orders";

// for (let i = 0; i < 10; i ++) {
//     let client = new MongoDBClient();
//     let o = await client.aggregate(collectionName, pipeline);
//     console.log(o[i]);
// }

export {MongoDBClient, ObjectId};
