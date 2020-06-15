import { Router } from "express";

import FolderController from "./controllers/FolderController";

const routes = new Router();

routes.post("/folders", FolderController.getByPath);

export default routes;
