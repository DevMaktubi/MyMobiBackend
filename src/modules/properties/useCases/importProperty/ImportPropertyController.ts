import { Request, Response } from "express";

import { ImportPropertyUseCase } from "./ImportPropertyUseCase";

class ImportPropertyController {
    constructor(private importPropertyUseCase: ImportPropertyUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        if (!file) {
            return res.status(400).send({
                message: "File not found",
            });
        }
        this.importPropertyUseCase.execute(file);
        return res.status(201).send();
    }
}
export { ImportPropertyController };
