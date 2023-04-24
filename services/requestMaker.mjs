import { response } from "express";
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
    
    async doPOST(hostname, port, path, data=null, contentType="application/json") {
        let responseText = "";
        
        await this.performRequest("POST",
            hostname, port, path, data, contentType
        ).then(_responseText => {
            responseText = _responseText;
        });

        return responseText;
    }

    async doGET(hostname, port, path) {
        let responseText = "";
        
        await this.performRequest("GET", 
            hostname, port, path
        ).then(_responseText => {
            responseText = _responseText;
        });

        return responseText;
    }

    performRequest(_method, _hostname, _port, _path, data=null, contentType=null, errRetryCount = 0) {
        return new Promise((resolve, reject) => {
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

            // Request object
            const request = http.request(options, (response) => {
                let responseText = '';

                response.setEncoding('utf8');
                
                response.on('data', (chunk) => {
                    responseText += chunk;
                });
                
                response.on('end', () => {
                    let responseObject = {
                        statusCode : response.statusCode,
                        data : responseText,
                        headers : response.headers
                    };
                    resolve(responseObject);
                });
    
            });
    
            request.on('error', (error) => {
                console.error(error);
                /* Connection may be refused
                * if a lot of requests are
                * made simultaneously.
                */
                if (error.code == "ECONNREFUSED") {
                    if (errRetryCount < this.maxRetries){
                        // Wait for 1 sec and retry after increasing errRetryCount
                        setTimeout(() => {
                            this.performRequest(_method, _hostname, _port, _path, data, contentType, ++errRetryCount);
                        }, 1000);
                    }
                    else {
                        let responseObject = {
                            statusCode : "ECONNREFUSED",
                            data : error,
                            headers : null
                        }
                        reject(responseObject);
                        // throw new Error(error);
                    }
                }
            });
    
            request.write(data);
            request.end();
        });
    }
}
// let requestMaker = new RequestMaker()
// requestMaker.performRequest("POST", "127.0.0.1", 5000, "/1.0/translator/translate-text", JSON.stringify({"text": "παγωτα"}), "application/json") 

export {RequestMaker};
