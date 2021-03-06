'use strict';

const Joi = require('joi');
class SlotModel {
    static get schema() {

        return {
            slotName: Joi.string(),
            entity: Joi.string(),
            isList: Joi.boolean(),
            isRequired: Joi.boolean(),
            textPrompts: Joi.array().items(Joi.string())
        };
    };
}

module.exports = SlotModel;
