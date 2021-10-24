import { Request, Response } from "express";

import { updatePropertySchema } from "../../services/UpdatePropertySchema";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

class UpdatePropertyController {
    constructor(private updatePropertyUseCase: UpdatePropertyUseCase) {}
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            // Validação do schema pode ser um middleware para manter SRP
            const validateSchema = await updatePropertySchema.validateAsync(
                req.body
            );

            if (!validateSchema) {
                throw new Error("Validation error");
            }

            this.updatePropertyUseCase.execute(id, req.body);
            return res.status(200).send();
        } catch (err) {
            if (err.isJoi === true) {
                return res.status(422).json({
                    error: err.message,
                });
            }
            return res.status(400).send(err.message);
        }
    }
}

export { UpdatePropertyController };
