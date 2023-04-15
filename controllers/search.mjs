import { parseValue } from "../utils/valueParser.mjs";

class searchResultsParser {
    constructor() {}

    static parseItems(items) {
        let _items = [];

        for (let item of items) {
            let _item = {};
            
            _item.itemId = parseValue(item["item_id"], 0);
            _item.itemName = parseValue(item["name"]);
            _item.itemPrice = parseValue(item["price"]);
            _item.itemPrice = _item.itemPrice.toFixed(2);


            _items.push(_item);
        }

        return _items;
    }

    static parseShops(shops) {
        let _shops = [];

        for (let shop of shops) {
            let _shop = {};

            _shop.shopId = shop["_id"].valueOf();
            _shop.shopName = parseValue(shop["name"]);
            _shop.operatingHours = parseValue(shop["operatingHours"])

            _shops.push(_shop);
        }

        return _shops;
    }

    static parseProducts(products) {
        let _products = [];

        for (let product of products) {
            let _product = {};

            // SHop info
            _product.shopId = product["_id"].valueOf()
            _product.shopName = parseValue(product["name"]);
            _product.operatingHours = parseValue(product["operating_hours"]);

            _product.items = searchResultsParser.parseItems(product.items);

            _products.push(_product);
        }

        return _products;
    }

}

export { searchResultsParser };
