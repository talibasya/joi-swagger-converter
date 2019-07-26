const Joi = require('joi');

const events_list = {
    PRESS_START_CALL: {
        description: 'Start call description',
        categoryName: 'other',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
        }).required()
    },
    PRESS_END_CALL: {
        description: 'End call description',
        categoryName: 'other',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            recipientId: Joi.number()
            .integer()
            .required(),
            username: Joi.string()
            .max(255)
            .allow('')
        }).required()
    },
    PRESS_BUY: {
        description: 'Buy description',
        categoryName: 'buy',
        data: Joi.object().keys({
            id: Joi.number()
            .integer()
            .required(),
            recipientId: Joi.number()
            .integer()
            .required(),
            username: Joi.string()
            .max(255)
            .allow('')
        }).required()
    },
    
}

module.exports = {
    events_list
};
