import { Property } from "../../model/Property";
import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

class FindProperytyUseCase {
    constructor(private propertiesRepository: PropertiesRepository) {}

    execute(propertyId: string): Property | undefined {
        const property = this.propertiesRepository.findById(propertyId);
        if (!property) {
            throw new Error("Property not found");
        }
        return property;
    }
}

export { FindProperytyUseCase };
