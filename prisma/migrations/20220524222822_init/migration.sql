-- CreateTable
CREATE TABLE "Federation" (
    "id" SERIAL NOT NULL,
    "tradeName" VARCHAR(255) NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "taxId" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255),
    "president" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Federation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Athlete" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(40),
    "name" VARCHAR(255) NOT NULL,
    "rg" VARCHAR(20),
    "taxId" VARCHAR(14),
    "sex" VARCHAR(1) NOT NULL,
    "email" VARCHAR(255),
    "birthDate" TIMESTAMP(3) NOT NULL,
    "facebook" VARCHAR(255),
    "phone" VARCHAR(40),
    "cellphone" VARCHAR(40),
    "federationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_federationId_fkey" FOREIGN KEY ("federationId") REFERENCES "Federation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
