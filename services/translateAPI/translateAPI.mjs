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

    async translateSplitText(text) {
        let data = JSON.stringify({"text" : text});
        let responseText = await this.doPOST(this.hostname, this.port, this.translateTextPath, data);
        return responseText;
    }

}

export { TranslatorAPI }
// let translator = new TranslatorAPI();
// let r = await translator.translateText("καλημερα, θελω Παγωτά και μπυρα και κοτοπουλα");
// console.log(r);

// for (let i = 0; i < 1000; i ++) {
//     let r = await translator.translateSplitText("καλημερα, θελω Παγωτά και μπυρα και κοτοπουλα");
//     console.log(r);
//     r = await translator.translateSplitText("παγωτά");
//     console.log(r);
//     r = await translator.translateSplitText("soublakia kai patates")
//     console.log(r);
//     console.log(i)
// }
