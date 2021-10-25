import { Router } from "express";
import multer from "multer";

import { createPropertyController } from "../modules/properties/useCases/createProperty";
import { deletePropertyController } from "../modules/properties/useCases/deleteProperty";
import { findPropertyController } from "../modules/properties/useCases/findProperty";
import { importPropertyController } from "../modules/properties/useCases/importProperty";
import { listPropertyController } from "../modules/properties/useCases/listProperty";
import { updatePropertyController } from "../modules/properties/useCases/updateProperty";

const propertiesRouter = Router();

const upload = multer({ dest: "tmp/" });

propertiesRouter.get("/", (req, res) => {
    return listPropertyController.handle(req, res);
});

propertiesRouter.get("/:id", (req, res) => {
    return findPropertyController.handle(req, res);
});

propertiesRouter.post("/", (req, res) => {
    return createPropertyController.handle(req, res);
});

propertiesRouter.post("/import", upload.single("file"), (req, res) => {
    return importPropertyController.handle(req, res);
});

propertiesRouter.delete("/:id", (req, res) => {
    return deletePropertyController.handle(req, res);
});

propertiesRouter.put("/:id", (req, res) => {
    return updatePropertyController.handle(req, res);
});
export { propertiesRouter };
