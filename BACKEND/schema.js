const Joi=require("joi");


module.exports.eventsSchema=Joi.object({
    event:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        date:Joi.date().required(),
        entryFee:Joi.number().allow('').default(0).min(0),
        eventType:Joi.string().required(),
        eventCategory:Joi.string().required(),
        location:Joi.string().required(),
        image:Joi.string().allow("",null),
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().min(1).max(5).required(),
        comment:Joi.string().required()
    }).required()
});