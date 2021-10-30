import express from "express";
import SwaggerUi from "swagger-ui-express";

import "./database";

import "./shared/container";

import { routes } from "./routes";
import SwaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(SwaggerFile));

app.use(routes);

app.listen(3333, () => console.log("Rodando."));
