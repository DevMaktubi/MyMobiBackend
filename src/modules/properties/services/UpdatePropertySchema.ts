import Joi from "joi";

const updatePropertySchema = Joi.object({
    name: Joi.string().min(3).max(30).optional(),
    description: Joi.string().min(3).max(100).optional(),
    location: Joi.object({
        country: Joi.string().min(3).max(30).optional(),
        state: Joi.string().min(3).max(30).optional(),
        city: Joi.string().min(3).max(30).optional(),
        street: Joi.string().min(3).max(30).optional(),
        number: Joi.number().optional(),
    }).optional(),
    price: Joi.number().optional(),
    rooms: Joi.number().integer().optional(),
    area: Joi.number().integer().optional(),
    images: Joi.array().items(Joi.string().optional()).optional(),
}).strict();

export { updatePropertySchema };
