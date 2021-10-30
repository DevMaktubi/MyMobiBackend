import { inject, injectable } from "tsyringe";

import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

@injectable()
class DeletePropertyUseCase {
    constructor(
        @inject("PropertiesRepository")
        private propertiesRepository: PropertiesRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this.propertiesRepository.delete(id);
    }
}

export { DeletePropertyUseCase };
