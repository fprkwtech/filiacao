/*
  Warnings:

  - A unique constraint covering the columns `[sourceId,sourceType]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "FederationAddress_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "AthleteAddress_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "SchoolAddress_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "TeacherAddress_sourceId_fkey";

-- DropIndex
DROP INDEX "Address_sourceId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Address_sourceId_sourceType_key" ON "Address"("sourceId", "sourceType");
