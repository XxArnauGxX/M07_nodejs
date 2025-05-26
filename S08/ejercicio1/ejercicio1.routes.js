import { Router } from "express";
import { validateNumber } from "./ejercicio1.middleware.js";
import { getRandomNumber } from "./ejercicio1.controller.js";

const routerEx1 = Router();

routerEx1.get("/:number", validateNumber, getRandomNumber);

export default routerEx1;
