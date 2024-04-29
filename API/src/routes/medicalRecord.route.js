import { Router } from "express";
import {
  createMedicalRecord,
  getAllData,
  getDataById,
  dataUpdate,
  dataDelete,
} from "../controllers/medicalRecord.controller.js";

const medicalRecordRouter = Router();

medicalRecordRouter.post("/", createMedicalRecord);
medicalRecordRouter.get("/", getAllData);
medicalRecordRouter.get("/:id_pasien", getDataById);
medicalRecordRouter.patch("/:id_pasien", dataUpdate);
medicalRecordRouter.delete("/:id_pasien", dataDelete);

export default medicalRecordRouter;
