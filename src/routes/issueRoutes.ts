import { Router } from "express";
import { scanRepo, analyzeRepo } from "../controllers/IssueController";

const router = Router();

router.post("/scan", scanRepo);
router.post("/analyze", analyzeRepo);

export default router;
