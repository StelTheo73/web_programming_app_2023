import { parseValue } from "../utils/valueParser.mjs";

let PAYMENT_MAP = {
    "CARD" : "far fa-credit-card",
    "GOOGLE PAY" : "fab fa-google-pay",
    "CASH" : "fa fa-money-bill-alt"
}

class OrdersParser {
    constructor() {}

    static _indexOfObject(items_list, item) {
        for (let i = 0; i < items_list.length; i++) {
          if (JSON.stringify(items_list[i]) === JSON.stringify(item)) {
            return i;
          }
        }
        return -1;
      }

    static categorizeItems(items) {
        let items_list = [];
        let quantity = [];
        let position = 0;
    
        for (let item of items) {
          position = OrdersParser._indexOfObject(items_list, item);
    
          if (position >= 0) {
              quantity[position]++;
          }
          else {
              items_list.push(item)
              quantity.push(1);
          }
        }
    
        for (let i = 0; i < items_list.length; i++) {
            items_list[i]["quantity"] = quantity[i];
        }
    
        return items_list;
    }

    static _visualizeRating(rating) {
        let stars = [
            "far fa-star", "far fa-star",
            "far fa-star", "far fa-star", "far fa-star"
        ];
        
        for (let i = 0; i < rating; i++) {
            stars[i] = "fas fa-star";
        }

        return stars;
    }

    static _calculateCost(items) {
        let cost = 0;
        for (let item of items) {
          cost = cost + item["price"] * item["quantity"];
        }
        return Math.ceil(cost*100) / 100;
    }

    static parseOrders(orders) {
        let _orders = [];
        
        for (let order of orders) {
            let _order = {};

            // Items
            _order.items = OrdersParser.categorizeItems(order["order_contains"]);
            _order.cost = OrdersParser._calculateCost(_order.items);
            _order.items = OrdersParser.parseItems(_order.items);

            // Shop Info
            // _order.shopName = parseValue(order["shop_name"]);
            _order = OrdersParser.parseShopInfo(_order, order);

            // Order info
            _order.datetime = parseValue(order["datetime"]);
            _order.status = parseValue(order["status"]);

            // Payment
            _order.paymentMean = parseValue(order["payment_mean"]);
            _order.paymentMeanIcon = PAYMENT_MAP[_order.paymentMean];
            _order.card = parseValue(order["card"]);
            _order.cardNumber = parseValue(order["card_number"]);
            if (_order.cardNumber) {
                _order.cardNumber = "&nbsp;(" + _order.cardNumber + ")";
            }
            
            // Address
            _order.street = parseValue(order["address"]["street"]);
            _order.number = parseValue(order["address"]["number"]);
            _order.city = parseValue(order["address"]["city"]);
            _order.postcode = parseValue(order["address"]["postcode"]);
            _order.country = parseValue(order["address"]["country"]);
            _order.bell = parseValue(order["address"]["bell"]);
            _order.floor = parseValue(order["address"]["floor"]);
            _order.note = parseValue(order["address"]["note"]);
            
            // Rating
            _order.rating = parseValue(order["rating"], 0);
            _order.stars = OrdersParser._visualizeRating(_order.rating)

            _orders.push(_order);
        }
        
        return _orders;
    }

    static parseItems(items) {
        let _items = [];

        for (let item of items) {
            let _item = {};

            _item.name = parseValue(item["name"]);
            _item.quantity = parseValue(item["quantity"], 1);
            _item.price = parseValue(item["price"], 0);

            if (_item.quantity > 1) {
                let one_price = _item.price;
                _item.price = _item.price * _item.quantity;
                _item.price = _item.price + " (" + one_price + ")";
            }

            _items.push(_item);
        }

        return _items;
    }

    static parseShopInfo(_order, order) {
        _order.shopName = parseValue(order["shop_name"]);
        _order.shopPhone = parseValue(order["shop_phone"]);
        _order.shopEmail = parseValue(order["shop_email"]);
        
        _order.shopAddressStreet = parseValue(order["shop_address"]["street"]);
        _order.shopAddressNumber = parseValue(order["shop_address"]["number"]);
        _order.shopAddressCity = parseValue(order["shop_address"]["city"]);
        _order.shopAddressPostcode = parseValue(order["shop_address"]["postcode"]);
        _order.shopAddressCountry = parseValue(order["shop_address"]["country"]);

        return _order;
    }
}

export { OrdersParser };
