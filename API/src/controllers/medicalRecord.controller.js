import { inputMedicalRecordValidation } from "../validations/medicalRecord.validations.js";
import {
  inputMedicalRecord,
  getAll,
  getById,
  updateData,
  deleteData,
} from "../services/medicalRecord.service.js";

export const createMedicalRecord = async (req, res) => {
  try {
    const { error, value } = inputMedicalRecordValidation(req.body);
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: "Input Data Failed",
        data: value,
      });
    }
    const data = await inputMedicalRecord(value);
    return res.status(201).json({
      status: "Success",
      message: "Input data successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: error,
      message: "Internal Server Error",
    });
  }
};

export const getAllData = async (req, res) => {
  try {
    const data = await getAll();
    if (data.length <= 0) {
      return res.status(404).json({
        status: "Not Found",
        message: "Data Not Found",
      });
    }
    return res.status(200).json({
      status: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: error,
      message: "Internal Server Error",
    });
  }
};

export const getDataById = async (req, res) => {
  try {
    const { id_pasien } = req.params;
    const data = await getById(id_pasien);
    if (!data) {
      return res.status(404).json({
        status: "Not Found",
        message: "Data Not Found",
      });
    }
    return res.status(200).json({
      status: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: error,
      message: "Internal Server Error",
    });
  }
};

export const dataUpdate = async (req, res) => {
  try {
    const { id_pasien } = req.params;
    const { error, value } = inputMedicalRecordValidation(req.body);
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: "Update data failed",
        data: value,
      });
    }
    const data = await updateData({
      id: id_pasien,
      ...value,
    });
    return res.status(200).json({
      error: null,
      message: "Update data Success",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: error,
      message: "Internal Server Error",
    });
  }
};

export const dataDelete = async (req, res) => {
  try {
    const { id_pasien } = req.params;
    const dataExist = await getById(id_pasien);
    if (!dataExist) {
      return res.status(404).json({
        status: "Data Not Found",
        data: dataExist,
      });
    }
    const data = await deleteData(id_pasien);
    return res.status(200).json({
      status: "Success",
      message: "Data Deleted",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: error,
      message: "Internal Server Error",
    });
  }
};
