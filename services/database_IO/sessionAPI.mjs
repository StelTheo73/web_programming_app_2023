import { replacesTones } from "../../utils/greekRegex.mjs";
import { MongoDBClient, ObjectId } from "./client.mjs";
import { TranslatorAPI } from "../translateAPI/translateAPI.mjs";

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
     * @param {String} _person_id - The id of the person.
     * @returns {Promise<Array>} The addresses of the person.
     */
    async getPersonAddresses(_person_id) {
        let addresses = [];
        
        if (this.parseUserInput([_person_id])) {
            let _query = {
                _id : new ObjectId(_person_id)
            }
            let _projection = {
                _id : 0,
                addresses : 1
            }

            addresses = await this.find("persons", _query, _projection);
        }
        return addresses[0].addresses;
    }

    /**
     * Returns an array with the cards of a person.
     * 
     * @async
     * @function getPersonCards
     * @param {String} _person_id - The id of the person.
     * @returns {Promise<Array>} The cards of the person.
     */
    async getPersonCards(_person_id) {
        let cards = [];

        if (this.parseUserInput([_person_id])) {
            let _query = {
                _id : new ObjectId(_person_id)
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
    async getPersonOrders(_person_id) {
        let orders = [];

        if (this.parseUserInput([_person_id])) {
            let pipeline = [
                {
                    $match : {
                        person_id : new ObjectId(_person_id)
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
    async searchShopsAndItems(text, city) {
        let textPattern = "";
        let parsedText = "";
        let cityPattern = "";
        let parsedCity = "";

        text = text.toLowerCase();
        parsedText = replacesTones(text);
        textPattern = `.*${parsedText}.*`;
        city = city.toLowerCase();
        parsedCity = replacesTones(city);
        cityPattern = `.*${parsedCity}.*`;
        
        // Translate and split
        let translatedTextList = await this.translateAndSplitText(text);

        // Search for shops and items
        let [shops, productsByTagSplit] = await Promise.all([
            this.searchShopsByName(textPattern, cityPattern),
            this.searchItemsByTagSPlit(translatedTextList, cityPattern)
        ]);

        return [shops, productsByTagSplit];
    }

    async translateAndSplitText(text) {
        let translator = new TranslatorAPI();
        let response = await translator.translateSplitText(text);
        let translatedText = JSON.parse(response.data)["translated_words"];

        console.log(translatedText);
        return translatedText;
    }

    async searchShopsByName(textPattern, cityPattern) {
        let shops = [];

        let _query = {
            $and : [
                {
                    "name" : {
                        $regex : textPattern,
                        $options : "i"
                    }
                },
                {
                    "address.city" : {
                        $regex : cityPattern,
                        $options : "i"
                    }
                }
            ]
        };
        let _projection = {
            _id : 1,
            name : 1,
            operating_hours : 1
        };

        shops = await this.find("shops", _query, _projection);

        return shops;
    }

    async searchItemsByName(textPattern, cityPattern) {
        let pipeline = [
            {
                $match : {
                    $and: [
                        {
                            "address.city" : {
                                $regex : cityPattern, 
                                $options : "i"
                            }
                        },
                        {
                            "items.name" : {
                                $regex : textPattern,
                                $options : "i"
                            }
                        }
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
                                        $regexMatch : {
                                            input : "$$item.name",
                                            regex : textPattern,
                                            options : "i"
                                        }
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

        let productsByName = await this.aggregate("shops", pipeline);

        return productsByName;
    }

    async searchItemsByTagSPlit(tagsList, cityPattern) {
        let matchTagsList = [];
        let filterTagsList = [];

        for (let word of tagsList) {
            matchTagsList.push({
               "items.tags" : word 
            });

            filterTagsList.push({
                $in : [word, "$$item.tags"]
            });
        }

        let pipeline = [
            {
                $match : {
                    $and: [
                        {
                            "address.city" : {
                                $regex : cityPattern, 
                                $options : "i"
                            }
                        },
                        {
                            $or: matchTagsList
                        }
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
                                        $or : filterTagsList
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

        let productsByTagSplit = await this.aggregate("shops", pipeline);

        return productsByTagSplit;
    }
}

export { SessionAPI };

// let ses = new SessionAPI();
// let data1 = await ses.getPersonCards("Dias_Pappas_908@hotmail.com")
// let data2 = await ses.getPersonOrders("642d12fd9f0c2c52ba5b81f6", 2021);
// console.log(data1);
// console.log(data2);
// console.log(data2[0].cards)

// let data3 = await ses.searchShopsAndItems("κοτοπλ", "θην");
// // console.log(data3)
// console.log("Result")
// for (let match of data3[1]) {
//     console.log(match.name);
//     console.log(match.items);
// }
