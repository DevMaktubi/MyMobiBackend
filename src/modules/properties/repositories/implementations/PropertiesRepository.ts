import { Property } from "../../model/Property";
import {
    ICreatePropertyDTO,
    IPropertiesRepository,
} from "../IPropertiesRepository";

class PropertiesRepository implements IPropertiesRepository {
    private properties: Property[] = [];

    private static INSTANCE: PropertiesRepository;

    private constructor() {
        this.properties = [];
    }

    public static getInstance(): PropertiesRepository {
        if (!PropertiesRepository.INSTANCE) {
            PropertiesRepository.INSTANCE = new PropertiesRepository();
        }
        return PropertiesRepository.INSTANCE;
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
        const newProperty = new Property({
            name,
            description,
            location,
            price,
            rooms,
            area,
            images,
        });
        this.properties.push(newProperty);
    }

    // Listar todas as propriedades
    findAll(): Property[] {
        return this.properties;
    }
    // Encontrar propriedade pelo nome
    findByName(name: string): Property {
        const property = this.properties.find(
            (property) => property.name === name
        );
        return property;
    }
    // Encontrar propriedade pelo id
    findById(id: string): Property {
        const property = this.properties.find((property) => property.id === id);
        return property;
    }
    async delete(id: string): Promise<void> {
        const propertyIndex = this.properties.findIndex(
            (property) => property.id === id
        );
        this.properties.splice(propertyIndex, 1);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update(propertyId: string, property: any): void {
        const propertyIndex = this.properties.findIndex(
            (p) => p.id === propertyId
        );
        const oldProperty = this.properties[propertyIndex];
        if (property.location) {
            // eslint-disable-next-line no-param-reassign
            property.location = {
                ...oldProperty.location,
                ...property.location,
            };
        }
        this.properties[propertyIndex] = { ...oldProperty, ...property };
    }
}

export { PropertiesRepository };
