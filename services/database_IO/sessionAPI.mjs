import { parse } from "path";
import { MongoDBClient, ObjectId } from "./client.mjs";

class SessionAPI extends MongoDBClient {
    constructor() {
        super();
    }

    parseUserInput(userInputList) {
        for (let userInput of userInputList) {
            for (let char of ["{", "}"]) {
                if (userInput.indexOf(char) >= 0) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Returns the id of a person if the
     * email and the password match with 
     * a record of the database.
     * Returns null if no match is found.
     * 
     * @async
     * @function userLogin
     * @param {String} _email - The email of the person.
     * @param {String} _password - The password of the person.
     * @returns {Promise<ObjectId>} The id of the person.
     */
    async userLogin(_email, _password) {
        let personId = [];
        
        if (this.parseUserInput([_email, _password])) {
            let _query = {
                email : _email,
                password : _password
            }

            personId = await this.find("persons", _query)
        }
        return personId;
    }

    /**
     * Returns the data related to a person from the database.
     * 
     * @async
     * @function getPersonData
     * @param {String} _personId - The id of the person.
     * @returns {Promise<Object>} The data related to this person.
     */
    async getPersonData(_personId) {
        let personData = [];
        
        if (this.parseUserInput([_personId])) {
            let _query = {
                _id : new ObjectId(_personId)
            }
            let _projection = {
                _id : 0,
                email : 1,
                firstname : 1,
                lastname : 1,
                phone : 1,
                addresses : 1,
                cards : 1
            }

            personData = await this.find("persons", _query, _projection);
        }
        return personData;
    }

    /**
     * Returns the id of the person in the database.
     * 
     * @async
     * @function getPersonIdFromEmail
     * @param {String} _email - The email of the person.
     * @returns {Promise<ObjectId>} The id of the person in the database
     */
    async getPersonIdFromEmail(_email) {
        let personId = [];
        
        if (this.parseUserInput([_email])) {
            let _query = {
                email : _email
            }
            let _projection = {
                _id : 1,
            }

            personId = await this.find("persons", _query, _projection);
        }
        return personId;
    } 

    /**
     * Returns the last used address of a person.
     * The last used address is the address of the last order.
     * 
     * @async
     * @function getLastAddress
     * @param {String} _person_id - The id of the person in the database.
     * @returns {Object} The last used address.
     */
    async getLastAddress(_person_id) {
        let lastAddress = [];
        
        if (this.parseUserInput([_person_id])) {
            let pipeline = [
                {
                    $match : {
                        person_id : new ObjectId(_person_id),
                    }
                },
                {
                    $project : {
                        _id : 0,
                        address : 1
                    }
                },
                {
                    $sort : {
                        datetime : -1
                    }
                },
                {
                    $limit : 1
                }
            ];
            lastAddress = await this.aggregate("orders", pipeline);
        }
        return lastAddress;
    }

    /**
     * Returns an array with the addresses of a person.
     * 
     * @async
     * @function getPersonAddresses
     * @param {String} _email - The email of the person.
     * @returns {Promise<Array>} The addresses of the person.
     */
    async getPersonAddresses(_email) {
        let addresses = [];
        
        if (this.parseUserInput([_email])) {
            let _query = {
                email : _email
            }
            let _projection = {
                _id : 1,
                addresses : 1
            }

            addresses = await this.find("persons", _query, _projection);
        }
        return addresses;
    }

    /**
     * Returns an array with the cards of a person.
     * 
     * @async
     * @function getPersonCards
     * @param {String} _email - The email of the person.
     * @returns {Promise<Array>} The cards of the person.
     */
    async getPersonCards(_email) {
        let cards = [];

        if (this.parseUserInput([_email])) {
            let _query = {
                email : _email
            }
            let _projection = {
                _id : 1,
                cards : 1
            }

            cards = await this.find("persons", _query, _projection);
        }
        return cards;
    }

    /**
     * Returns the orders of a persons from a specific year.
     * 
     * @async
     * @function getPersonOrders
     * @param {ObjectId} _person_id - The id of the person.
     * @param {String} year - Year of the orders.
     * @returns {Promise<Array>} Array containing the orders.
     */
    async getPersonOrders(_person_id, year) {
        let orders = [];
        let yearPattern = `^${year}-*`;

        if (this.parseUserInput([_person_id])) {
            let pipeline = [
                {
                    $match : {
                        person_id : new ObjectId(_person_id),
                        datetime : { 
                            $regex : yearPattern
                        }
                    }
                },
                {
                    $lookup : {
                        from : "shops",
                        localField : "shop_id",
                        foreignField : "_id",
                        as : "shop"
                    }
                },
                {
                    $unwind : "$shop"
                },
                {
                    $project : {
                        shop_id : 1,
                        shop_name : "$shop.name",
                        shop_address : "$shop.address",
                        shop_phone : "$shop.phone",
                        shop_email : "$shop.email",
                        _id : 1,
                        datetime : 1,
                        status : 1,
                        order_contains : 1,
                        address : 1,
                        payment_mean : 1,
                        card : 1,
                        person_id : 1,
                        rating : 1
                    }
                },
                {
                    $sort : {
                        datetime : -1
                    }
                }
            ];

            orders = await this.aggregate("orders", pipeline);
        }
        return orders;
    }

    /**
     * Searches for shops amd items that match the provided text.
     * Returns two lists:
     *      1) Contains the shops,
     *      2) Contains the items
     * that match the provided text.
     * 
     * @async
     * @function searchShopAndItem
     * @param {String} - Text to search for in the database.
     */
    async searchShopAndItem(text) {
        let shops = [];
        let productsByName = [];
        let productsByNameSplit = [];
        let productsByTagSplit = [];
        let _query = {};
        let _projection = {};
        let pipeline = {};

        text = text.toLowerCase();

        // Search for shop
        _query = {
            name : text
        };
        _projection = {
            _id : 0,
            name : 1
        };

        shops = await this.find("shops", _query)

        // Search for item by name
        
        
        
        
        // productsByName = 
        // Translate and split
        
        // Search for item by name from translate and split
        
        // Search for item by tag from translate and split
        pipeline = [
            {
                $match : {
                    $and: [
                        {"address.city" : "Πάτρα"},
                        {$or: [
                            {"items.tags" : "sweet"},
                            {"items.tags" : "pizza"}
                        ]}
                    ]
                }
            },
            {
                $project : {
                    _id : 0,
                    name : 1,
                    operating_hours : 1,
                    items : {
                        $filter : {
                            input : "$items",
                            as    : "item",
                            cond  : {
                                $and : [
                                    {
                                        $or : [
                                            {$in : ["sweet", "$$item.tags"]},
                                            {$in : ["pizza", "$$item.tags"]}
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            {
                $sort : {
                    name : 1        
                }
            }
        ];

        productsByTagSplit = await this.aggregate("shops", pipeline);

        return productsByTagSplit;
    }
}

let ses = new SessionAPI();
// let data1 = await ses.getPersonCards("Dias_Pappas_908@hotmail.com")
// let data2 = await ses.getPersonOrders("642d12fd9f0c2c52ba5b81f6", 2021);
// console.log(data1);
// console.log(data2);
// console.log(data2[0].cards)

let data3 = await ses.searchShopAndItem("pizza");
for (let match of data3) {
    console.log(match.items);
}
