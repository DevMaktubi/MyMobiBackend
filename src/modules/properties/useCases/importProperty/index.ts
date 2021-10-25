import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { ImportPropertyController } from "./ImportPropertyController";
import { ImportPropertyUseCase } from "./ImportPropertyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const importPropertyUseCase = new ImportPropertyUseCase(propertiesRepository);

const importPropertyController = new ImportPropertyController(
    importPropertyUseCase
);

export { importPropertyController };
