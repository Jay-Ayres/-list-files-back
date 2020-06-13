import { Router } from "express";

import FolderController from "./controllers/FolderController";

const routes = new Router();

routes.get("/folders", FolderController.index);

export default routes;
