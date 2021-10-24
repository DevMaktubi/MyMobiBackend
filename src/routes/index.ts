import { Router } from "express";

import { propertiesRouter } from "./properties.routes";

const routes = Router();

routes.use("/properties", propertiesRouter);

export { routes };
