import { RequestMaker } from "../requestMaker.js";

class TranslatorAPI extends RequestMaker {
    constructor() {
        // TODO : GET FROM CONFIG
        super();
        this.hostname = "127.0.0.1";
        this.port = 5000;
        this.APIPath = "/1.0/translator";
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
