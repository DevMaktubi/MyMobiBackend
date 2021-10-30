import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportPropertyUseCase } from "./ImportPropertyUseCase";

class ImportPropertyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const importPropertyUseCase = container.resolve(ImportPropertyUseCase);
        const { file } = req;
        if (!file) {
            return res.status(400).send({
                message: "File not found",
            });
        }
        await importPropertyUseCase.execute(file);
        return res.status(201).send();
    }
}
export { ImportPropertyController };
