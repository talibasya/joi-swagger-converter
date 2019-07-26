
function validate_data(event_name, data){
    
    const event_file = require('./events');
    const Joi = require('joi');
        
    events = event_file.events_list;
    schema = events[event_name]['data'];

    const res = Joi.validate(data,schema);
    if(res.error)
    {
        throw "WRONG DATA.\n"+res.error;
    }
        
    return true;
}

module.exports = {
    validate_data,
}