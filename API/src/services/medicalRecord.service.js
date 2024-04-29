import prisma from "../utils/client.utils.js";

export const inputMedicalRecord = async (payload) => {
  const data = await prisma.medicalRecord.create({ data: payload });
  return data;
};

export const getAll = async () => {
  const data = await prisma.medicalRecord.findMany();
  return data;
};

export const getById = async (id_pasien) => {
  const data = await prisma.medicalRecord.findUnique({
    where: {
      id_pasien,
    },
  });
  return data;
};

export const updateData = async (payload) => {
  const data = await prisma.medicalRecord.update({
    where: {
      id_pasien: payload.id_pasien,
    },
    data: { ...payload },
  });
  return data;
};

export const deleteData = async (id_pasien) => {
  const data = await prisma.medicalRecord.delete({
    where: {
      id_pasien,
    },
  });
  return data;
};
