import { Property } from "../entities/Property";

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

interface IUpdatePropertyDTO {
    name?: string;
    description?: string;
    location?: {
        country?: string;
        state?: string;
        city?: string;
        street?: string;
        number?: number;
    };
    price?: number;
    rooms?: number;
    area?: number;
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
    }: ICreatePropertyDTO): Promise<void>;
    findAll(): Promise<Property[]>;
    findByName(name: string): Promise<Property>;
    findById(id: string): Promise<Property>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update(propertyId: string, property: IUpdatePropertyDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IPropertiesRepository, ICreatePropertyDTO, IUpdatePropertyDTO };
