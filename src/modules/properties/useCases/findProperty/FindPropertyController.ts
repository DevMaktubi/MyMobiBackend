import { Request, Response } from "express";

import { FindProperytyUseCase } from "./FindProperyUseCase";

class FindPropertyController {
    constructor(private findPropertyUseCase: FindProperytyUseCase) {}

    handle(req: Request, res: Response): Response {
        const { id } = req.params;
        const property = this.findPropertyUseCase.execute(id);
        return res.status(200).json(property);
    }
}

export { FindPropertyController };
