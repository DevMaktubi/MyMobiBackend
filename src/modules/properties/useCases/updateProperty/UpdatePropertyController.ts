import { Request, Response } from "express";
import { container } from "tsyringe";

import { updatePropertySchema } from "../../services/UpdatePropertySchema";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

class UpdatePropertyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updatePropertyUseCase = container.resolve(UpdatePropertyUseCase);
        const { id } = req.params;
        try {
            // Validação do schema pode ser um middleware para manter SRP
            const validateSchema = await updatePropertySchema.validateAsync(
                req.body
            );

            if (!validateSchema) {
                throw new Error("Validation error");
            }

            await updatePropertyUseCase.execute(id, req.body);

            return res.status(200).send();
        } catch (err) {
            if (err.isJoi === true) {
                return res.status(422).json({
                    error: err.message,
                });
            }
            return res.status(404).json({ error: err.message });
        }
    }
}

export { UpdatePropertyController };
