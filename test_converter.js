
// Example of joi object
var joi_example = joi.object().keys({
    id:      joi.number().integer().positive().required(),
    name:    joi.string(),
    email:   joi.string().email().required(),
    created: joi.date().allow(null),
    active:  joi.boolean().default(true),
  });

// Converting joi to swagger scheme
var swagger = convert(obj);
console.log(swagger)