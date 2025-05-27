import { Router } from "express";
import {
  addMobile,
  deleteMobile,
  getMobiles,
  updateMobile,
} from "./mobile.controller.js";

const router = Router();

router.post("/", addMobile);
router.get("/", getMobiles);
router.put("/", updateMobile);
router.delete("/", deleteMobile);

export default router;
