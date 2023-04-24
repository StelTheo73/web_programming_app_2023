import { TranslatorAPI } from "./services/translateAPI/translateAPI.js";
let translator = new TranslatorAPI();

for (let i = 0; i < 1000; i ++) {
    translator.translateText("καλημερα, θελω Παγωτά και μπυρα και κοτοπουλα");
    translator.translateText("παγωτά");
    translator.translateText("soublakia kai patates")
}