import { Router } from "express";
import multer from "multer";

import { CreatePropertyController } from "../modules/properties/useCases/createProperty/CreatePropertyController";
import { DeletePropertyController } from "../modules/properties/useCases/deleteProperty/DeletePropertyController";
import { FindPropertyController } from "../modules/properties/useCases/findProperty/FindPropertyController";
import { ImportPropertyController } from "../modules/properties/useCases/importProperty/ImportPropertyController";
import { ListPropertyController } from "../modules/properties/useCases/listProperty/ListPropertyController";
import { UpdatePropertyController } from "../modules/properties/useCases/updateProperty/UpdatePropertyController";

const propertiesRouter = Router();

const upload = multer({ dest: "tmp/" });

const createPropertyController = new CreatePropertyController();
const deletePropertyController = new DeletePropertyController();
const findPropertyController = new FindPropertyController();
const importPropertyController = new ImportPropertyController();
const updatePropertyController = new UpdatePropertyController();
const listPropertyController = new ListPropertyController();

propertiesRouter.get("/", listPropertyController.handle);

propertiesRouter.get("/:id", findPropertyController.handle);

propertiesRouter.post("/", createPropertyController.handle);

propertiesRouter.post(
    "/import",
    upload.single("file"),
    importPropertyController.handle
);

propertiesRouter.delete("/:id", deletePropertyController.handle);

propertiesRouter.put("/:id", updatePropertyController.handle);
export { propertiesRouter };
