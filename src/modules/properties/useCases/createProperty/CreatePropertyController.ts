import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreatePropertyDTO } from "../../repositories/IPropertiesRepository";
import { createPropertySchema } from "../../services/CreatePropertySchema";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

class CreatePropertyController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createPropertyUseCase = container.resolve(CreatePropertyUseCase);
        try {
            const {
                name,
                description,
                location,
                price,
                area,
                rooms,
                images,
            }: ICreatePropertyDTO = request.body;

            const validateSchema = await createPropertySchema.validateAsync({
                name,
                description,
                location,
                price,
                rooms,
                area,
                images,
            });

            if (!validateSchema) {
                throw new Error("Validation error");
            }

            await createPropertyUseCase.execute({
                name,
                description,
                location,
                price,
                area,
                rooms,
                images,
            });

            return response.status(201).send();
        } catch (err) {
            if (err.isJoi === true) {
                return response.status(422).json({
                    message: err.message,
                });
            }
            return response.status(400).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}

export { CreatePropertyController };
