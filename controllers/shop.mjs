import { parseValue } from "../utils/valueParser.mjs";

class shopParser {
    constructor() {}

    static parseItems(items) {
        let _items = [];

        for (let item of items) {
            let _item = {};
            
            _item.item_id = parseValue(item["item_id"], 0);
            _item.name = parseValue(item["name"]);
            _item.price = parseValue(item["price"]);
            _item.price = _item.price.toFixed(2);


            _items.push(_item);
        }

        return _items;
    }

}

export { shopParser };
