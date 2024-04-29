import { Router } from "express";
import { errorHandling, notFound } from "../controllers/error.controller.js";
import medicalRecordRouter from "./medicalRecord.route.js";
const router = Router();

router.use("/api/v1/medical-record", medicalRecordRouter);

router.use("*", errorHandling);
router.use("*", notFound);

export default router;
