import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

class DeletePropertyUseCase {
    constructor(private propertiesRepository: PropertiesRepository) {}

    async execute(id: string): Promise<void> {
        await this.propertiesRepository.delete(id);
    }
}

export { DeletePropertyUseCase };
