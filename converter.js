function convert(joi_object){
    var j2s = require('joi-to-swagger');
    var {swagger, components} = j2s(joi_object); 
    return swagger;
}

module.exports = {
    convert,
}
