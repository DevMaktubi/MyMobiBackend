import { v4 as uuid } from "uuid";

interface IPropertyProps {
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

class Property {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
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

    constructor({
        name,
        description,
        location,
        price,
        rooms,
        area,
        images,
    }: IPropertyProps) {
        this.id = uuid();
        this.name = name;
        this.description = description;
        this.created_at = new Date();
        this.updated_at = new Date();
        this.location = location;
        this.price = price;
        this.rooms = rooms;
        this.area = area;
        this.images = images;
    }
}

export { Property };
