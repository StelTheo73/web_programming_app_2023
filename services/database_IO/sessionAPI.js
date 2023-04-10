import { parse } from "path";
import { MongoDBClient, ObjectId } from "./client.js";

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

    async login(_email, _password) {
        let personId = null;
        if (this.parseUserInput([_email, _password])) {
            let _query = {
                email : _email,
                password : _password
            }

            personId = await this.find("persons", _query)
        }
        return personId;
    }

    async getPersonData(personId) {
        let personData = null;
        if (this.parseUserInput([personId])) {
            let _query = {
                _id : new ObjectId(personId)
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
}

// let ses = new SessionAPI();
// let data = await ses.getPersonData("642d12fd9f0c2c52ba5b81f6");
// console.log(data);
// console.log(data[0].cards)