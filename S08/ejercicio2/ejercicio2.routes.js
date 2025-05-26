import { Router } from "express";
import { validateRequest } from "./ejercicio2.middleware.js";
import { changeArray } from "./ejercicio2.controller.js";

const routerEx2 = Router();

routerEx2.put("/", validateRequest, changeArray);

export default routerEx2;
