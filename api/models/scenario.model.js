'use strict';

const Joi = require('joi');
const SlotModel = require('./slot.scenario.model');
class ScenarioModel {
    static get schema() {

        return {
            id: Joi.string(),
            agent: Joi.string(),
            domain: Joi.string(),
            intent: Joi.string(),
            scenarioName: Joi.string(),
            slots: Joi.array().items(SlotModel.schema),
            intentResponses: Joi.array().items(Joi.string())
        };
    };
}

module.exports = ScenarioModel;
