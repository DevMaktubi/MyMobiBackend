import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

class UpdatePropertyUseCase {
    constructor(private propertiesRepository: PropertiesRepository) {}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async execute(propertyId: string, property: any): Promise<void> {
        const propertyUpdated = await this.propertiesRepository.update(
            propertyId,
            property
        );

        return propertyUpdated;
    }
}

export { UpdatePropertyUseCase };
