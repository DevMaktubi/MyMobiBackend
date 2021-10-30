import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

class DeletePropertyController {
    async handle(req: Request, res: Response): Promise<void> {
        const deletePropertyUseCase = container.resolve(DeletePropertyUseCase);
        try {
            const { id } = req.params;
            await deletePropertyUseCase.execute(id);
            res.status(200).send();
        } catch (err) {
            res.status(404).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}

export { DeletePropertyController };
