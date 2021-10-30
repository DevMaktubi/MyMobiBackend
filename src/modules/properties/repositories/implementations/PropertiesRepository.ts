import { getRepository, Repository } from "typeorm";

import { Property } from "../../entities/Property";
import {
    ICreatePropertyDTO,
    IPropertiesRepository,
    IUpdatePropertyDTO,
} from "../IPropertiesRepository";

class PropertiesRepository implements IPropertiesRepository {
    repository: Repository<Property>;

    constructor() {
        this.repository = getRepository(Property);
    }

    // Criar propriedade
    async create({
        name,
        description,
        location,
        price,
        rooms,
        area,
        images,
    }: ICreatePropertyDTO): Promise<void> {
        const { country, state, city, street, number } = location;
        const newProperty = await this.repository.create({
            name,
            description,
            country,
            state,
            city,
            street,
            number,
            price,
            rooms,
            area,
            images,
        });
        await this.repository.save(newProperty);
    }

    // Listar todas as propriedades
    async findAll(): Promise<Property[]> {
        const properties = await this.repository.find();
        return properties;
    }
    // Encontrar propriedade pelo nome
    async findByName(name: string): Promise<Property> {
        const property = await this.repository.findOne({ name });
        return property;
    }
    // Encontrar propriedade pelo id
    async findById(id: string): Promise<Property> {
        const property = await this.repository.findOne(id);
        return property;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async update(
        propertyId: string,
        property: IUpdatePropertyDTO
    ): Promise<void> {
        const oldProperty = await this.repository.findOne(propertyId);
        // if (property.location) {
        //     // eslint-disable-next-line no-param-reassign
        //     const oldLocation = {
        //         country: oldProperty.country,
        //         state: oldProperty.state,
        //         city: oldProperty.city,
        //         street: oldProperty.street,
        //         number: oldProperty.number,
        //     };
        //     const newLocation = {
        //         country: property.location.country,
        //         state: property.location.state,
        //         city: property.location.city,
        //         street: property.location.street,
        //         number: property.location.number,
        //     };
        //     // eslint-disable-next-line no-param-reassign
        //     property.location = {
        //         ...oldLocation,
        //         ...newLocation,
        //     };
        // }
        const { name, description, price, rooms, area, images } = property;
        if (property.location) {
            const { country, state, city, street, number } = property.location;
            const newProperty = {
                name: name || oldProperty.name,
                description: description || oldProperty.description,
                country: country || oldProperty.country,
                state: state || oldProperty.state,
                city: city || oldProperty.city,
                street: street || oldProperty.street,
                number: number || oldProperty.number,
                price: price || oldProperty.price,
                rooms: rooms || oldProperty.rooms,
                area: area || oldProperty.area,
                images,
            };

            await this.repository.update(propertyId, newProperty);
        } else {
            const newProperty = {
                name: name || oldProperty.name,
                description: description || oldProperty.description,
                country: oldProperty.country,
                state: oldProperty.state,
                city: oldProperty.city,
                street: oldProperty.street,
                number: oldProperty.number,
                price: price || oldProperty.price,
                rooms: rooms || oldProperty.rooms,
                area: area || oldProperty.area,
                images,
            };
            await this.repository.update(propertyId, newProperty);
        }
    }
}

export { PropertiesRepository };
