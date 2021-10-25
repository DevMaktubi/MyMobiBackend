import { Request, Response } from "express";

import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

class DeletePropertyController {
    constructor(private deletePropertyUseCase: DeletePropertyUseCase) {}

    async handle(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.deletePropertyUseCase.execute(id);
            res.status(200).send();
        } catch (err) {
            res.status(404).json({
                message: err.message || "Unexpected error.",
            });
        }
    }
}

export { DeletePropertyController };
