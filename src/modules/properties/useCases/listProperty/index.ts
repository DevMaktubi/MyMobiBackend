import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { ListPropertyController } from "./ListPropertyController";
import { ListPropertyUseCase } from "./ListPropertyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const listPropertyUseCase = new ListPropertyUseCase(propertiesRepository);

const listPropertyController = new ListPropertyController(listPropertyUseCase);

export { listPropertyController };
