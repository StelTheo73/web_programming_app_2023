import { RequestMaker } from "../requestMaker.mjs";
import { TRANSLATOR_API_CONFIG } from "../../config/translatorAPI.mjs"

/**
 * Class representing an API for translating text.
 * @extends RequestMaker
 */
class TranslatorAPI extends RequestMaker {

    constructor() {
        super();
        this.hostname = TRANSLATOR_API_CONFIG.host;
        this.port = process.env.PORT || TRANSLATOR_API_CONFIG.port;
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

