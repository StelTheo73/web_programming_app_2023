import { time } from "console";
import http  from "http";
let RETRIES = 0;

class RequestMaker {
    constructor (timeout=2000, maxRetries=10) {
        this.timeout = timeout;
        this.maxRetries = maxRetries;
    }

    setTimeout(timeout) {
        this.timeout = timeout;
    }

    setMaxRetries(maxRetries) {
        this.maxRetries = maxRetries;
    }
    
    doPOST(hostname, port, path, data=null, contentType="application/json") {
        this.performRequest("POST", hostname, port, path,
            data, contentType
        );
    }

    doGET(hostname, port, path) {
        this.performRequest("GET", hostname, port, path);
    }

    performRequest(_method, _hostname, _port, _path, data=null, contentType=null) {

        // if (contentType == "application/json") {
        //     data = JSON.stringify(data);
        // }

        let options = {
            hostname : _hostname,
            port : _port,
            path : _path,
            method : _method
        }


        if (data != null && contentType != null) {
            options.headers = {
                "Content-Type" : contentType,
                "Content-Length" : data.length
            }
        }
        // console.log(data);
        // console.log(options);
        const request = http.request(options, (response) => {
            let retryCount = 0;
            console.log(`statusCode: ${response.statusCode}`);
            response.setEncoding('utf8');
            
            let responseText = '';
            response.on('data', (chunk) => {
                responseText += chunk;
            });
            
            response.on('end', () => {
                // console.log(++REQUESTS);
                console.log(`Response: ${responseText}`);
                // console.log(RETRIES);
            });

        });

        request.on('error', (error) => {
            let errRetryCount = 1;
            console.error(error);
            if (error.code == "ECONNREFUSED") {
                if (errRetryCount <= this.maxRetries){
                    RETRIES ++;
                    setTimeout(() => {
                        this.performRequest(_method, _hostname, _port, _path, data, contentType);
                        errRetryCount++;
                    }, 2000);
                    errRetryCount++;
                }
                else {
                    throw new Error(error);
                }
            }
        });

        request.write(data);
        request.end();

        return
    }
}

// let requestMaker = new RequestMaker()
// requestMaker.performRequest("POST", "127.0.0.1", 5000, "/1.0/translator/translate-text", JSON.stringify({"text": "παγωτα"}), "application/json") 

export {RequestMaker};
