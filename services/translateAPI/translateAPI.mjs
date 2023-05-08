import { RequestMaker } from "../requestMaker.mjs";
import { TRANSLATE_API_CONFIG } from "../../config/configuration.mjs";
import { Translate } from "@google-cloud/translate/build/src/v2/index.js";

const PROJECT_ID = TRANSLATE_API_CONFIG.PROJECT_ID;
const API_KEY = TRANSLATE_API_CONFIG.API_KEY;

/**
 * Class representing an API for translating text.
 * @extends RequestMaker
 */
class TranslatorAPI extends RequestMaker {

    constructor() {
        super();
    }

    async translateSplitText(text) {
        const translate = new Translate({
            projectId: PROJECT_ID,
            key: API_KEY
        });
        const target = 'en';
        const [translation] = await translate.translate(text, target);
        console.log(`Translation: ${translation}`);

        return translation.split(" ");
    }

}

export { TranslatorAPI }

