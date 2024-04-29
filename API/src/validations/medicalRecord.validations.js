import joi from "joi";

const regexName = /^(?!.*(.)\1{2})[a-zA-Z]+(?: [a-zA-Z]+)*$/;

export const inputMedicalRecordValidation = (payload) => {
  const schema = joi.object({
    nama_pasien: joi
      .string()
      .trim()
      .required()
      .min(3)
      .max(50)
      .pattern(regexName)
      .messages({
        "string.base": "name must be a string",
        "string.empty": "name cannot be empty",
        "string.min": "name must be at least 3 characters long",
        "string.max": "name must have a maximum length of 50 characters",
        "string.pattern.base": "the name you entered is invalid",
        "any.required": "name must be a required",
      }),
    tanggal_pengobatan: joi.date().required().messages({
      "date.base": "Date invalid",
      "any.required": "must be required",
    }),
    keluhan: joi.array().items(joi.string()).required().messages({
      "array.base": "must be an array",
      "any.required": "must be required",
    }),
    resep_obat: joi.array().items(joi.string()).required().messages({
      "array.base": "must be an array",
      "any.required": "must be required",
    }),
    biaya: joi.number().required().messages({
      "number.base": "cost must be a number",
      "any.required": "cost must be required",
    }),
    asuransi: joi.boolean().messages({
      "boolean.base": "must be true or false",
    }),
    nama_asuransi: joi.string().allow(null, "").messages({
      "string.base": "Insurance name must be a string",
    }),
    biaya_cover_asuransi: joi.number().messages({
      "number.base": "cover cost insurance must be a number",
      "any.required": "cover cost insurance must be a required number",
    }),
  });

  return schema.validate(payload);
};
