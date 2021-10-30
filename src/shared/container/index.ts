import { container } from "tsyringe";

import { PropertiesRepository } from "../../modules/properties/repositories/implementations/PropertiesRepository";
import { IPropertiesRepository } from "../../modules/properties/repositories/IPropertiesRepository";

container.register<IPropertiesRepository>(
    "PropertiesRepository",
    PropertiesRepository
);
