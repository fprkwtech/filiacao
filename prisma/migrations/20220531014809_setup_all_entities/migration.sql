/*
  Warnings:

  - You are about to alter the column `taxId` on the `Athlete` table. The data in that column could be lost. The data in that column will be cast from `VarChar(14)` to `VarChar(11)`.
  - You are about to alter the column `facebook` on the `Athlete` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(45)`.
  - You are about to alter the column `taxId` on the `Federation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `VarChar(14)`.
  - Changed the type of `sex` on the `Athlete` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DocumentSource" AS ENUM ('Athlete', 'Teacher', 'School');

-- CreateEnum
CREATE TYPE "AddressSource" AS ENUM ('Athlete', 'School', 'Teacher', 'Federation');

-- CreateEnum
CREATE TYPE "FightStyleRelationSource" AS ENUM ('Athlete', 'School', 'Teacher');

-- CreateEnum
CREATE TYPE "ValidateHistorySource" AS ENUM ('Athlete', 'School', 'Teacher');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('FOTO', 'RG', 'CPF', 'COMPROVANTE_RESIDENCIA');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('M', 'F');

-- AlterTable
ALTER TABLE "Athlete" ADD COLUMN     "legalGuardianId" INTEGER,
ALTER COLUMN "code" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "rg" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "taxId" SET DATA TYPE VARCHAR(11),
DROP COLUMN "sex",
ADD COLUMN     "sex" "Sex" NOT NULL,
ALTER COLUMN "birthDate" SET DATA TYPE DATE,
ALTER COLUMN "facebook" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "cellphone" SET DATA TYPE VARCHAR(45);

-- AlterTable
ALTER TABLE "Federation" ALTER COLUMN "taxId" SET DATA TYPE VARCHAR(14);

-- CreateTable
CREATE TABLE "LegalGuardian" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "relationship" VARCHAR(45) NOT NULL,
    "taxId" VARCHAR(11) NOT NULL,
    "rg" VARCHAR(45) NOT NULL,
    "birthDate" DATE NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalGuardian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "companyName" VARCHAR(45) NOT NULL,
    "tradeName" VARCHAR(45),
    "taxId" VARCHAR(14) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "federationId" INTEGER NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(45),
    "name" VARCHAR(255) NOT NULL,
    "rg" VARCHAR(45) NOT NULL,
    "issuingAgency" VARCHAR(45) NOT NULL,
    "taxId" VARCHAR(11) NOT NULL,
    "sex" "Sex" NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "birthDate" DATE NOT NULL,
    "facebook" VARCHAR(45),
    "phone" VARCHAR(45),
    "cellphone" VARCHAR(45) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "federationId" INTEGER NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherAthlete" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "athleteId" INTEGER NOT NULL,

    CONSTRAINT "TeacherAthlete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolTeacher" (
    "id" SERIAL NOT NULL,
    "owner" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "SchoolTeacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FightStyle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "category" VARCHAR(45) NOT NULL,
    "region" VARCHAR(45) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FightStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "type" "DocumentType" NOT NULL,
    "content" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "sourceType" VARCHAR(45) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "zipcode" VARCHAR(8) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(45),
    "district" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "sourceType" "AddressSource" NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metadata" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR(45) NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "federationId" INTEGER NOT NULL,

    CONSTRAINT "Metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolAthlete" (
    "id" SERIAL NOT NULL,
    "main" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "athleteId" INTEGER NOT NULL,

    CONSTRAINT "SchoolAthlete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FightStyleRelation" (
    "id" SERIAL NOT NULL,
    "main" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fightStyleId" INTEGER NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "sourceType" "FightStyleRelationSource" NOT NULL,

    CONSTRAINT "FightStyleRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValidateHistory" (
    "id" SERIAL NOT NULL,
    "dueDate" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "sourceType" "ValidateHistorySource" NOT NULL,

    CONSTRAINT "ValidateHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SchoolTeacher_schoolId_owner_key" ON "SchoolTeacher"("schoolId", "owner");

-- CreateIndex
CREATE UNIQUE INDEX "Address_sourceId_key" ON "Address"("sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "SchoolAthlete_athleteId_main_key" ON "SchoolAthlete"("athleteId", "main");

-- CreateIndex
CREATE UNIQUE INDEX "FightStyleRelation_main_sourceId_key" ON "FightStyleRelation"("main", "sourceId");

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "LegalGuardian"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "School" ADD CONSTRAINT "School_federationId_fkey" FOREIGN KEY ("federationId") REFERENCES "Federation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_federationId_fkey" FOREIGN KEY ("federationId") REFERENCES "Federation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAthlete" ADD CONSTRAINT "TeacherAthlete_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAthlete" ADD CONSTRAINT "TeacherAthlete_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolTeacher" ADD CONSTRAINT "SchoolTeacher_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolTeacher" ADD CONSTRAINT "SchoolTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "AthleteDocument_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "SchoolDocument_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "TeacherDocument_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "FederationAddress_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Federation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "AthleteAddress_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "SchoolAddress_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "TeacherAddress_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metadata" ADD CONSTRAINT "Metadata_federationId_fkey" FOREIGN KEY ("federationId") REFERENCES "Federation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolAthlete" ADD CONSTRAINT "SchoolAthlete_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchoolAthlete" ADD CONSTRAINT "SchoolAthlete_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightStyleRelation" ADD CONSTRAINT "AthleteFightStyleRelation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightStyleRelation" ADD CONSTRAINT "SchoolFightStyleRelation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightStyleRelation" ADD CONSTRAINT "TeacherFightStyleRelation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightStyleRelation" ADD CONSTRAINT "FightStyleRelation_fightStyleId_fkey" FOREIGN KEY ("fightStyleId") REFERENCES "FightStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValidateHistory" ADD CONSTRAINT "AthleteValidateHistory_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValidateHistory" ADD CONSTRAINT "SchoolValidateHistory_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValidateHistory" ADD CONSTRAINT "TeacherValidateHistory_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
