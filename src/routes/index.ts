import { Application, Request, Response } from "express";
import path from "path";

import reactPages from "./react-pages";

function setRoutes(app: Application) {
  // Set up routes for React pages
  reactPages(app);
}

export default setRoutes;
