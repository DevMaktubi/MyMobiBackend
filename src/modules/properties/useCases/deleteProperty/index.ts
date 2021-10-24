import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { DeletePropertyController } from "./DeletePropertyController";
import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const deletePropertyUseCase = new DeletePropertyUseCase(propertiesRepository);

const deletePropertyController = new DeletePropertyController(
    deletePropertyUseCase
);

export { deletePropertyController };
