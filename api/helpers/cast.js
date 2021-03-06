'use strict';

module.exports = (object, type) => {

    switch (type){

        case 'agent':
            object.useWebhook = object.useWebhook === 'true';
            object.domainClassifierThreshold = parseFloat(object.domainClassifierThreshold);
            break;
        case 'context':
            break;
        case 'domain':
            object.enabled = object.enabled === 'true';
            object.intentThreshold = parseFloat(object.intentThreshold);
            break;
        case 'entity':
            break;
        case 'intent':
            object.useWebhook = object.useWebhook === 'true';
            object.examples = object.examples.map((example) => {

                if (example.entities){
                    if (example.entities.length === 0){
                        example.entities = [];
                    }
                    else {
                        example.entities = example.entities.map((entity) => {

                            if (entity.entityId){
                                entity.entityId = parseInt(entity.entityId);
                            }
                            entity.start = parseInt(entity.start);
                            entity.end = parseInt(entity.end);
                            return entity;
                        });
                    }
                }
                return example;
            });
            break;
        case 'scenario':
            if (object.slots){
                if (object.slots.length === 0){
                    object.slots = [];
                }
                else {
                    object.slots = object.slots.map((slot) => {

                        if (slot.textPrompts){
                            if (slot.textPrompts.length === 0){
                                slot.textPrompts = [];
                            }
                        }
                        slot.isList = slot.isList === 'true';
                        slot.isRequired = slot.isRequired === 'true';
                        return slot;
                    });
                }
            }
            if (object.intentResponses){
                if (object.intentResponses.length === 0){
                    object.intentResponses = [];
                }
            }
            break;
        case 'webhook':
            break;
    };
    if (object.id){
        object.id = parseInt(object.id);
    }
    return object;
};
