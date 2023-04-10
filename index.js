import { TranslatorAPI } from "./services/translateAPI/translateAPI.js";
import { Collection, MongoClient, ObjectId } from "mongodb";
import { DATABASE_CONFIG } from "./config/database.js";
console.log(DATABASE_CONFIG.host);
console.log(DATABASE_CONFIG.port);
console.log(DATABASE_CONFIG.path);

let translator = new TranslatorAPI();

for (let i = 0; i < 1000; i ++) {
    translator.translateText("καλημερα, θελω Παγωτά και μπυρα και κοτοπουλα");
    translator.translateText("παγωτά");
    translator.translateText("soublakia kai patates")
}
