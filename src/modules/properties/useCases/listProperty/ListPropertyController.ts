import { Request, Response } from "express";

import { ListPropertyUseCase } from "./ListPropertyUseCase";

class ListPropertyController {
    constructor(private listPropertyUseCase: ListPropertyUseCase) {}

    handle(request: Request, response: Response): Response {
        const property = this.listPropertyUseCase.execute();

        return response.status(200).json(property);
    }
}

export { ListPropertyController };
