import { Property } from "../../model/Property";
import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

class FindProperytyUseCase {
    constructor(private propertiesRepository: PropertiesRepository) {}

    execute(propertyId: string): Property | undefined {
        return this.propertiesRepository.findById(propertyId);
    }
}

export { FindProperytyUseCase };
