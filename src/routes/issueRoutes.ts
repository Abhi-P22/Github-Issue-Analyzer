import { Router } from "express";
import { scanRepo, analyzeRepo } from "../controllers/issue.controller.js";

const router = Router();

router.post("/scan", scanRepo);
router.post("/analyze", analyzeRepo);

export default router;
