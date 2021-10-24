import Joi from "joi";

const createPropertySchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(100).required(),
    location: Joi.object({
        country: Joi.string().min(3).max(30).required(),
        state: Joi.string().min(3).max(30).required(),
        city: Joi.string().min(3).max(30).required(),
        street: Joi.string().min(3).max(30).required(),
        number: Joi.number().required(),
    }).required(),
    price: Joi.number().required(),
    rooms: Joi.number().integer().required(),
    area: Joi.number().integer().required(),
    images: Joi.array().items(Joi.string().optional()).required(),
}).strict();

export { createPropertySchema };
