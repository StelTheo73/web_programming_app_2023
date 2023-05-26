import { parseValue } from "../utils/valueParser.mjs";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";

const sessionAPI = new SessionAPI();
sessionAPI.connect();

class OrderParser {
    constructor() {}

    static getOrderItems(items) {
        let _items = [];

        if (items === undefined || items === null ||
            items.length === 0    
        ) {
            return [];
        }

        items = JSON.parse(items);

        for (let item of items) {
            let _item = {
                item_id : item.itemId,
                name : item.itemName,
                price : item.itemPrice
            }
            
            for (let quantity = 0; quantity < item.quantity; quantity++) {
                _items.push(_item);
            }
        }

        return _items;
    }

    static async parseOrder(order, personId) {
        let parsedOrder = {};

        parsedOrder.person_id = personId;
        parsedOrder.shop_id = parseValue(order["shop-id"]);
        parsedOrder.order_contains = OrderParser.getOrderItems(order["order-items"]);
        parsedOrder.phone = parseValue(order["phone"]);

        parsedOrder.datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');;
        parsedOrder.status = "ΣΤΑΛΘΗΚΕ";
        parsedOrder.rating = "0";

        parsedOrder.address = await sessionAPI.getPersonAddressById(personId, order["order-address"]);

        parsedOrder.payment_mean = parseValue(order["payment-mean"]);
        if (parsedOrder.payment_mean === "CARD") {
            parsedOrder.card = await sessionAPI.getPersonCardById(personId, order["order-card"]);
        }

        return parsedOrder;
    }

}

export { OrderParser } ;
