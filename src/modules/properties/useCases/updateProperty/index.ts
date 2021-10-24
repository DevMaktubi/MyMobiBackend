import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { UpdatePropertyController } from "./UpdatePropertyController";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const updatePropertyUseCase = new UpdatePropertyUseCase(propertiesRepository);

const updatePropertyController = new UpdatePropertyController(
    updatePropertyUseCase
);

export { updatePropertyController };
