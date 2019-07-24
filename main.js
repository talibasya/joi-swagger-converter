
// Converts joi objects in events and sends them to given URL.
function main(events_list, url="https://swagger-flask-events.herokuapp.com/allevents", method="POST"){
    try {
        const joi_converter = require('./converter.js');
        const server_connector = require('./server-connection.js');
        connector = new server_connector.ServerConnector(url,method);

        // Get branch and platform
        var branch = process.env.SWAGGER_EVENTS_BRANCH;
        var platform = process.env.SWAGGER_EVENTS_PLATFORM;

        if(branch == null || branch == '' || platform == null || platform == ''){
            console.log('Wrong banch: ',branch, '  or platform:  ', platform);
            return;
        }
        
        // Unpack data
        converted = events_list['events'];
        
        // Convert joi to swagger
        for (let index = 0; index < converted.length; index++) {
            converted[index]['data'] = joi_converter.convert(converted[index]['data'])          
        };

        data_to_send = {
            jsonData: converted,
            branch: branch,
            platform: platform,
        };

        connector.send_message(data_to_send,true);
        console.log("CONVERTING PASSED AND SEND");
    } catch (error) {
       console.log(error) 
    }
} 

const events_file = require('./events')
main(events_list);

