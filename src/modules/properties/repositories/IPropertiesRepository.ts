import { Property } from "../model/Property";

interface ICreatePropertyDTO {
    name: string;
    description: string;
    location: {
        country: string;
        state: string;
        city: string;
        street: string;
        number: number;
    };
    price: number;
    rooms: number;
    area: number;
    images?: string[];
}

interface IPropertiesRepository {
    create({
        name,
        description,
        location,
        price,
        rooms,
        area,
        images,
    }: ICreatePropertyDTO): void;
    findAll(): Property[];
    findByName(name: string): Property | undefined;
    findById(id: string): Property | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update(propertyId: string, property: any): void;
    delete(id: string): void;
}

export { IPropertiesRepository, ICreatePropertyDTO };
