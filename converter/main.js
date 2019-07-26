
// Converts joi objects in events and sends them to given URL.
function main(events_list, url="https://swagger-flask-events.herokuapp.com/allevents", method="POST"){
    try {
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

        var converted = events_list
        // Convert joi to swagger
        var j2s = require('joi-to-swagger');
        for (var key in converted) {
            var joi = converted[key]['data'];  
            if(joi)
            {
                var {swagger, components} = j2s(joi); 
                converted[key]['data'] = swagger;
            }
            else
            {
                converted[key]['data'] = null;
            }
        }

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


events_file = require('./events');
main(events_file.events_list);


