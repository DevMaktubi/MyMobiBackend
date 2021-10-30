import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindProperytyUseCase } from "./FindProperyUseCase";

class FindPropertyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const findPropertyUseCase = container.resolve(FindProperytyUseCase);
        const { id } = req.params;
        try {
            const property = await findPropertyUseCase.execute(id);
            return res.status(200).json(property);
        } catch (err) {
            return res.status(404).json({ error: "Property not found." });
        }
    }
}

export { FindPropertyController };
