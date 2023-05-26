import { replacesTones } from "../../utils/greekRegex.mjs";
import { MongoDBClient, ObjectId } from "./client.mjs";
import { TranslatorAPI } from "../translateAPI/translateAPI.mjs";

class SessionAPI extends MongoDBClient {
    constructor() {
        super();
    }

    /**
     * Parses and cleans user input to prevent injection.
     * 
     * @function parseUserInput
     * @param {Array} userInputList - A list containing user input.
     * @returns {Array} The parsed user input.
     */
    parseUserInput(userInputList) {
        let parsedList = [];

        for (let userInput of userInputList) {
            if (userInput === null || userInput === undefined) {
                userInput = " ";
                continue;
            }

            userInput = String(userInput);

            for (let char of "{}[]()^+*/=|<>~`;:") {
                userInput = userInput.replace(char, "");
            }
            
            if (userInput == "") {
                userInput = " ";
            }

            parsedList.push(userInput);
        }

        return parsedList;
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

        [_email, _password] = this.parseUserInput([_email, _password]);
        console.log("Parsed input ", _email, _password)

        let _query = {
            email : _email,
            password : _password
        }

        personId = await this.find("persons", _query)

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
        
        _personId = this.parseUserInput([_personId])[0];

        let _query = {
            _id : new ObjectId(_personId)
        }
        let _projection = {
            _id : 0,
            email : 1,
            firstname : 1,
            lastname : 1,
            phone : 1,
            birthdate : 1,
            addresses : 1,
            cards : 1
        }

        personData = await this.find("persons", _query, _projection);

        if (personData.length === 0) {
            return [];
        }

        return personData[0];
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
        
        _email = this.parseUserInput([_email])[0];
        
        let _query = {
            email : _email
        }
        let _projection = {
            _id : 1,
        }

        personId = await this.find("persons", _query, _projection);

        return personId;
    } 

    async addressExists(_person_id, address_id) {
        [_person_id, address_id] = this.parseUserInput([_person_id, address_id]);

        let _query = {
            _id : new ObjectId(_person_id),
            addresses : {
              $elemMatch : {
                address_id : address_id
              }
            }
        }

        let result = await this.find("persons", _query);

        if (result[0] === null || result[0] === undefined) {
            return false;
        }

        return true;
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
        
        _person_id = this.parseUserInput([_person_id])[0];

        let pipeline = [
            {
                $match : {
                    person_id : new ObjectId(_person_id),
                }
            },
            {
                $project : {
                    _id : 0,
                    "address" : 1,
                    datetime : 1
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
        let addressExists = false;
        if (lastAddress.length !== 0) {
            addressExists = await this.addressExists(_person_id, lastAddress[0]["address"]["address_id"]);
        }

        if (addressExists === true) {
            return lastAddress[0]["address"];
        }
        else {
            let addresses = await this.getPersonAddresses(_person_id);
            if (addresses.length === 0) {
                return {};
            }
            else {
                return addresses[0]
            }
        }

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
        let pipeline = {};

        _person_id = this.parseUserInput([_person_id])[0];

        try {
            pipeline = [
                { 
                    $match: { 
                        _id: new ObjectId(_person_id) 
                    } 
                },
                { 
                    $unwind: "$addresses" 
                },
                {
                     $sort: { 
                        "addresses.city": 1,
                        "addresses.street" : 1,
                        "addresses.number" : 1
                    } 
                },
                {
                  $group: {
                    _id: "$_id",
                    addresses: { 
                        $push: "$addresses" 
                    }
                  }
                },
                {
                  $project: {
                    _id: 1,
                    addresses: 1
                  }
                }
            ];
        }
        catch (error) {
            console.log(error);
            return "ERROR";
        }

        addresses = await this.aggregate("persons", pipeline);

        if (addresses === null || addresses === undefined || addresses.length === 0) {
            return [];
        }
        else if (addresses[0].addresses === null || addresses[0].addresses === undefined || 
            addresses[0].length === 0
        ) {
            return [];
        }
        
        return addresses[0].addresses;
    }

    async getPersonAddressById(_person_id, _address_id) {
        let address = [];

        [_person_id, _address_id] = this.parseUserInput([_person_id, _address_id]);
        console.log(_person_id, _address_id)
        let _query = {
            _id: new ObjectId(_person_id),
            "addresses.address_id": _address_id
        }

        let _projection = {
            _id: 0,
            "addresses.$": 1
        }

        address = await this.find("persons", _query, _projection);

        if (address.length === 0) {
            return [];
        }

        return address[0].addresses[0];
    }

    async getPersonCardById(_person_id, _card_id) {
        let card = [];

        [_person_id, _card_id] = this.parseUserInput([_person_id, _card_id]);
        console.log(_person_id, _card_id)
        let _query = {
            _id: new ObjectId(_person_id),
            "cards.card_id": _card_id
        }

        let _projection = {
            _id: 0,
            "cards.$": 1
        }

        card = await this.find("persons", _query, _projection);

        if (card.length === 0) {
            return [];
        }

        return card[0].cards[0];
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
        let _query = {};
        let _projection = {}

        _person_id = this.parseUserInput([_person_id])[0];
        
        try {
            _query = {
                _id : new ObjectId(_person_id)
            }
        }
        catch(error) {
            console.log(error);
            return "ERROR";
        }
        
        _projection = {
            _id : 1,
            cards : 1
        }
        
        cards = await this.find("persons", _query, _projection);

        if (cards === null || cards === undefined || cards.length === 0) {
            return [];
        }
        else if (cards[0].cards === null || cards[0].cards === undefined || 
            cards[0].length === 0    
        ) {
            return [];
        }
        
        return cards[0].cards;
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
    async getPersonOrders(_person_id, _limit = 50) {
        let orders = [];

        _person_id = this.parseUserInput([_person_id])[0];

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
            },
            {
                $limit: parseInt(_limit)
            }
        ];

            orders = await this.aggregate("orders", pipeline);

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

        [text, city] = this.parseUserInput([text, city]);

        text = text.toLowerCase();
        parsedText = replacesTones(text);
        textPattern = `.*${parsedText}.*`;
        city = city.toLowerCase();
        parsedCity = replacesTones(city);
        cityPattern = `.*${parsedCity}.*`;
        
        // Translate and split
        let translatedTextList = await this.translateAndSplitText(text);
        console.log("translatedTextList", translatedTextList);
        // Search for shops and items
        let shops = await this.searchShopsByName(textPattern, cityPattern);
        let productsByTagSplit = await this.searchItemsByTagSPlit(translatedTextList, cityPattern);
        console.log(shops)
        console.log(productsByTagSplit)
        return [shops, productsByTagSplit];
    }

    async translateAndSplitText(text) {
        let translator = new TranslatorAPI();
        let response = await translator.translateSplitText(text);
        console.log(response);

        for (let index in response) {
            response[index] = response[index].toLowerCase();
        }

        return response;
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
                    _id : 1,
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

    async searchShopsByCategory(category, city) {
        let cityPattern = "";
        let parsedCity = "";
        let categoryPattern = "";
        let parsedCategory = "";

        [category, city] = this.parseUserInput([category, city]);
        
        category = category.toLowerCase();
        parsedCategory = replacesTones(category);
        categoryPattern = `.*${parsedCategory}.*`;
        city = city.toLowerCase();
        parsedCity = replacesTones(city);
        cityPattern = `.*${parsedCity}.*`;
        console.log(categoryPattern)

        let shops = [];

        let _query = {
            $and : [
                {
                    "address.city" : {
                        $regex : cityPattern,
                        $options : "i"
                    }
                },
                {
                    "categories" : {
                        $regex : categoryPattern,
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

    async getShopData(_shopId) {
        let shopData = [];
        let _query = {};
        let _projection = {};

        _shopId = this.parseUserInput([_shopId])[0];

        try {
            _query = {
                _id : new ObjectId(_shopId)
            }
        }
        catch (error) {
            console.log(error);
            return [];
        }

        _projection = {
            _id : 0,
            type : 1,
            name : 1,
            email : 1,
            phone : 1,
            categories : 1,
            operating_hours : 1,
            address : 1
        }

        shopData = await this.find("shops", _query, _projection);

        if (shopData === null || shopData === undefined || shopData.length === 0) {
            return [];
        }

        return shopData[0];
    }

    async fetchItemsByCategory(_shopId, category) {
        let items = {};
        let categoryPattern = "";
        let parsedCategory = "";

        [_shopId, category] = this.parseUserInput([_shopId, category]);

        parsedCategory = category.toLowerCase();
        parsedCategory = replacesTones(parsedCategory);
        categoryPattern = `.*${parsedCategory}.*`;

        let pipeline = [
            {
                $match : {
                    $and: [
                        {
                            "_id" : new ObjectId(_shopId)
                        },
                        {
                            "items.category_name" : {
                                $regex : categoryPattern,
                                $options : "i"
                            }
                        }
                    ]
                }
            },
            {
                $project : {
                    _id : 0,
                    items : {
                        $map : {
                            input : {
                                $filter : {
                                    input : "$items",
                                    as    : "item",
                                    cond  : {
                                        $and : [
                                            {
                                                $regexMatch : {
                                                    input : "$$item.category_name",
                                                    regex : categoryPattern,
                                                    options : "i"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            as : "item",
                            in : {
                                item_id : "$$item.item_id",
                                name: "$$item.name",
                                price: "$$item.price"
                            }
                        }
                    }
                }
            }
        ];

        items.category = category
        items.products = (await this.aggregate("shops", pipeline))[0].items;

        return items;
    }

    async addPersonItem(_person_id, _item, _type) {
        _person_id = this.parseUserInput([_person_id])[0];

        let itemRecord = {};
        for (let field in _item) {
            _item[field] = this.parseUserInput([_item[field]])[0];

            if (_item[field] != " ") {
                itemRecord[field] = _item[field];
            }
        }
        
        const hash = this.createObjectHash(itemRecord);

        const _filter = {
            _id : new ObjectId(_person_id)
        }

        let _update = null;
        switch (_type) {
            case "address" : {
                itemRecord["address_id"] = hash;
                _update = {
                    $push : {
                        addresses : itemRecord
                    }
                };
                break;
            }
            case "card" : {
                itemRecord["card_id"] = hash;
                _update = {
                    $push : {
                        cards : itemRecord
                    }
                };
                break;
            }
            default:
                _update = null;

        }
        
        if (_update != null){
            await this.updateRecord("persons", _filter, _update);
        }

        return;
    }

    async editPersonItem(_person_id, _item, _item_id, _type) {
        [_person_id, _item_id]= this.parseUserInput([_person_id, _item_id]);

        let itemRecord = {};
        for (let field in _item) {
            _item[field] = this.parseUserInput([_item[field]])[0];

            if (_item[field] != " ") {
                itemRecord[field] = _item[field];
            }
        }

        let _filter = null;
        let _update = null;

        switch(_type) {
            case "address" : {
                _filter = {
                    _id : new ObjectId(_person_id),
                    "addresses.address_id" : _item_id
                }

                _update = {
                    $set : {
                        "addresses.$.city" : itemRecord["city"],
                        "addresses.$.street" : itemRecord["street"],
                        "addresses.$.number" : itemRecord["number"],
                        "addresses.$.postcode" : itemRecord["postcode"],
                        "addresses.$.country" : itemRecord["country"],
                        "addresses.$.floor" : itemRecord["floor"],
                        "addresses.$.bell" : itemRecord["bell"],
                        "addresses.$.note" : itemRecord["note"]
                    }
                }


            }
        }

        if (_update !== null && _filter !== null) {
            await this.updateRecord("persons", _filter, _update);
        }

        return;
    }

    async deletePersonItem(_person_id, _item_id, _type) {
        [_person_id, _item_id] = this.parseUserInput([_person_id, _item_id]);

        let _filter = null; 
        let _update = null;
        switch (_type) {
            case "address" : {
                _filter = {
                    _id : new ObjectId(_person_id),
                    "addresses.address_id" : _item_id
                };
                _update = {
                    $pull : {
                        addresses : {
                            address_id : _item_id
                        }
                    }
                };
                break;
            }
            case "card" : {
                _filter = {
                    _id : new ObjectId(_person_id),
                    "cards.card_id" : _item_id
                };
                _update = {
                    $pull : {
                        cards : {
                            card_id : _item_id
                        }
                    }
                };
                break;
            }
            default:
                _filter = null;
                _update = null;

        }

        if (_update !== null && _filter !== null){
            await this.updateRecord("persons", _filter, _update);
        }

        return;

    }

    async saveOrder(_order) {

        _order.person_id = new ObjectId(_order.person_id);
        _order.shop_id = new ObjectId(_order.shop_id);

        const response = await this.insertOne("orders", _order);
        return response;
    }

    async updateOrder(_order_id, _order) {
        [_order_id] = this.parseUserInput([_order_id]);
        
        let ordersRecord = {};
        for (let field in _order) {
            _order[field] = this.parseUserInput([_order[field]])[0];

            if (_order[field] != " ") {
                ordersRecord[field] = _order[field];
            }
        }

        const _filter = {
            _id : new ObjectId(_order_id)
        }
        const _update= {
            $set : {
                "rating" : ordersRecord["rating"]
            }
        }

        await this.updateRecord("orders", _filter, _update);

        return;
    }
}

export { SessionAPI };
