import { ICreatePropertyDTO } from "../../repositories/IPropertiesRepository";

class CreatePropertyUseCase {
    constructor(private propertiesRepository) {}
    execute({
        name,
        description,
        location,
        price,
        area,
        rooms,
        images,
    }: ICreatePropertyDTO) {
        const propertyExists = this.propertiesRepository.findByName(name);

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
