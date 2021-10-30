import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";

interface IImportProperty {
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
    images: string[];
}
@injectable()
class ImportPropertyUseCase {
    constructor(
        @inject("PropertiesRepository")
        private propertiesRepository: PropertiesRepository
    ) {}

    private async loadProperties(
        file: Express.Multer.File
    ): Promise<IImportProperty[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const properties: IImportProperty[] = [];
            const parseFile = csvParse();
            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [
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
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        ...images
                    ] = line;

                    properties.push({
                        name,
                        description,
                        location: {
                            country,
                            state,
                            city,
                            street,
                            number: Number(number),
                        },
                        price: Number(price),
                        rooms: Number(rooms),
                        area: Number(area),
                        images: [],
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(properties);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const properties = await this.loadProperties(file);

        properties.map(async (property) => {
            const { name, description, location, price, rooms, area, images } =
                property;
            const propertyExists = await this.propertiesRepository.findByName(
                name
            );
            if (!propertyExists) {
                await this.propertiesRepository.create({
                    name,
                    description,
                    location,
                    price,
                    rooms,
                    area,
                    images,
                });
            }
        });
    }
}

export { ImportPropertyUseCase };
