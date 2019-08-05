const { events } = require("./events");
const Joi = require("joi");

const validate = (eventName, body) => {
  try {
    if (!events[eventName]) throw new Error("Event is not exist");
    const res = Joi.validate(body, events[eventName].schema);
    if (res.error) throw new Error("Wrong data. \n" + res.error);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  validate
};
