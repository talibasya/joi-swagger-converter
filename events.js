const Joi = require('joi');

events_list = {
    events:[
        {
            eventName: 'PRESS_START_CALL',
            description: 'Start call description',
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
            })
            .required()
        },
        {
            eventName: 'PRESS_ENDING_CALL',
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
            })
            .required()
        },
        {
            eventName: 'PRESS_NEWBUY',
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
            })
            .required()
        },
        {
            eventName: 'PRESS_COKOLWIEK',
            description: 'Sell description',
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
            })
            .required()
        },
        {
            eventName: 'EVENT',
            description: 'DESC',
            categoryName: 'CATEGORY',
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
            })
            .required()
        },       
    ]}