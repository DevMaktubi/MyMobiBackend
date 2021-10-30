import { inject, injectable } from "tsyringe";

import { Property } from "../../entities/Property";
import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

@injectable()
class FindProperytyUseCase {
    constructor(
        @inject("PropertiesRepository")
        private propertiesRepository: PropertiesRepository
    ) {}

    async execute(propertyId: string): Promise<Property> {
        const property = await this.propertiesRepository.findById(propertyId);
        if (!property) {
            throw new Error("Property not found");
        }
        return property;
    }
}

export { FindProperytyUseCase };
