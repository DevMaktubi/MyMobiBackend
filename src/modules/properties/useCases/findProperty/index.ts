import { PropertiesRepository } from "../../repositories/implementations/PropertiesRepository";
import { FindPropertyController } from "./FindPropertyController";
import { FindProperytyUseCase } from "./FindProperyUseCase";

const propertiesRepository = PropertiesRepository.getInstance();

const findPropertyUseCase = new FindProperytyUseCase(propertiesRepository);

const findPropertyController = new FindPropertyController(findPropertyUseCase);

export { findPropertyController };
