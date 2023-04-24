import { parseValue } from "../utils/valueParser.mjs";

class AddressParser {
    constructor() {}

    static parseAddresses(addresses) {
        let _addresses = [];
        for (let address of addresses) {
            let _address = {};
            
            _address._id = parseValue(address["address_id"]);
            _address.city = parseValue(address["city"]);
            _address.street = parseValue(address["street"]);
            _address.number = parseValue(address["number"]);
            _address.floor = parseValue(address["floor"]);
            _address.bell = parseValue(address["bell"]);
            _address.postcode = parseValue(address["postcode"]);
            _address.country = parseValue(address["country"]);
            _address.notes = parseValue(address["notes"]);

            _addresses.push(_address);
        }

        return _addresses;
    }
}

export { AddressParser };
