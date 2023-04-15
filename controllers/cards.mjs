import { parseValue } from "../utils/valueParser.mjs";

class CardsParser {
    constructor() {}

    static parseCards(cards) {
        let _cards = [];

        for (let card of cards) {
            let _card = {};
            
            _card.cardNumber = parseValue(card["card_number"]);
            _card.cvv = parseValue(card["cvv"]);
            _card.expirationDate = parseValue(card["expiration_date"]);
            _card.cardholder = parseValue(card["cardholder"]);

            _cards.push(_card);
        }

        return _cards;
    }
}

export { CardsParser };
