import { inject, injectable } from "tsyringe";

import { Property } from "../../entities/Property";
import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

@injectable()
class ListPropertyUseCase {
    constructor(
        @inject("PropertiesRepository")
        private propertiesRepository: PropertiesRepository
    ) {}

    async execute(): Promise<Property[]> {
        return this.propertiesRepository.findAll();
    }
}

export { ListPropertyUseCase };
