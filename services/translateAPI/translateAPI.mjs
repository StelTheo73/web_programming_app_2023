import { RequestMaker } from "../requestMaker.mjs";
import { TRANSLATOR_API_CONFIG } from "../../config/translatorAPI.mjs"

/**
 * Class representing the client of the Translator API.
 * @extends RequestMaker
 */
class TranslatorAPI extends RequestMaker {

    /**
     * Setup the request maker
     */
    constructor() {
        // TODO : GET FROM CONFIG
        super();
        this.hostname = TRANSLATOR_API_CONFIG.host;
        this.port = TRANSLATOR_API_CONFIG.port;
        this.APIPath = TRANSLATOR_API_CONFIG.path;
        this.translateTextPath = this.APIPath + "/translate-split-text";
    }

    translateText(text) {
        let data = JSON.stringify({"text" : text});
        this.doPOST(this.hostname, this.port, this.translateTextPath, data);
    }

}

export { TranslatorAPI }
// let translator = new TranslatorAPI();

// for (let i = 0; i < 1000; i ++) {
//     translator.translateText("καλημερα, θελω Παγωτά και μπυρα και κοτοπουλα");
//     translator.translateText("παγωτά");
//     translator.translateText("soublakia kai patates")
// }
