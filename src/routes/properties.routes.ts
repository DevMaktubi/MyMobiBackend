import { Router } from "express";

import { createPropertyController } from "../modules/properties/useCases/createProperty";
import { deletePropertyController } from "../modules/properties/useCases/deleteProperty";
import { findPropertyController } from "../modules/properties/useCases/findProperty";
import { listPropertyController } from "../modules/properties/useCases/listProperty";
import { updatePropertyController } from "../modules/properties/useCases/updateProperty";

const propertiesRouter = Router();

propertiesRouter.get("/", (req, res) => {
    return listPropertyController.handle(req, res);
});

propertiesRouter.get("/:id", (req, res) => {
    return findPropertyController.handle(req, res);
});

propertiesRouter.post("/", (req, res) => {
    return createPropertyController.handle(req, res);
});

propertiesRouter.delete("/:id", (req, res) => {
    return deletePropertyController.handle(req, res);
});

propertiesRouter.put("/:id", (req, res) => {
    return updatePropertyController.handle(req, res);
});
export { propertiesRouter };
