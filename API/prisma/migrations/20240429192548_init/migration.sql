-- CreateTable
CREATE TABLE "MedicalRecord" (
    "nama_pasien" TEXT NOT NULL,
    "id_pasien" TEXT NOT NULL,
    "tanggal_pengobatan" DATE NOT NULL,
    "keluhan" TEXT[],
    "resep_obat" TEXT[],
    "biaya" DOUBLE PRECISION NOT NULL,
    "asuransi" BOOLEAN NOT NULL DEFAULT false,
    "nama_asuransi" TEXT,
    "biaya_cover_asuransi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("id_pasien")
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalRecord_id_pasien_key" ON "MedicalRecord"("id_pasien");
