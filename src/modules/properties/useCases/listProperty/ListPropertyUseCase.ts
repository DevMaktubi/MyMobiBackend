import { Property } from "../../model/Property";
import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

class ListPropertyUseCase {
    constructor(private propertiesRepository: PropertiesRepository) {}

    execute(): Property[] {
        return this.propertiesRepository.findAll();
    }
}

export { ListPropertyUseCase };
