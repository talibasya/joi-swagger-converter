var server = require('xmlhttprequest')

class ServerConnector{
    constructor(url, method){
        this.url = url;
        this.method = method;
        this.xhr = new server.XMLHttpRequest();
        this.xhr.open(method,url,true)
        this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }

    send_message(message, parse_to_JSON=false){
        if(parse_to_JSON){
            message = JSON.stringify(message)
        }
        this.xhr.send(message)
    }
}

module.exports = {
    ServerConnector,
}