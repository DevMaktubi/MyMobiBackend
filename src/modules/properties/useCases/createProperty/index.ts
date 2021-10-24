import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { CreatePropertyController } from "./CreatePropertyController";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const createPropertyUseCase = new CreatePropertyUseCase(propertiesRepository);

const createPropertyController = new CreatePropertyController(
    createPropertyUseCase
);

export { createPropertyController };
