import { inject, injectable } from "tsyringe";

import { ICreatePropertyDTO } from "../../repositories/IPropertiesRepository";

@injectable()
class CreatePropertyUseCase {
    constructor(
        @inject("PropertiesRepository")
        private propertiesRepository
    ) {}
    async execute({
        name,
        description,
        location,
        price,
        area,
        rooms,
        images,
    }: ICreatePropertyDTO) {
        const propertyExists = await this.propertiesRepository.findByName(name);

        if (propertyExists) {
            throw new Error("Propriedade já existe.");
        }

        return this.propertiesRepository.create({
            name,
            description,
            location,
            price,
            area,
            rooms,
            images,
        });
    }
}

export { CreatePropertyUseCase };
