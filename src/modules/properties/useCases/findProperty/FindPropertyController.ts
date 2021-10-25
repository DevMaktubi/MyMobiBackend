import { Request, Response } from "express";

import { FindProperytyUseCase } from "./FindProperyUseCase";

class FindPropertyController {
    constructor(private findPropertyUseCase: FindProperytyUseCase) {}

    handle(req: Request, res: Response): Response {
        const { id } = req.params;
        try {
            const property = this.findPropertyUseCase.execute(id);
            return res.status(200).json(property);
        } catch (err) {
            return res.status(404).json({ error: "Property not found." });
        }
    }
}

export { FindPropertyController };
