import { Prisma, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
};

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    body: { payload },
    query: { school_id },
  } = req;

  const school = await prisma.school.findUnique({
    where: { id: Number(school_id) },
  });

  const teacher = await prisma.teacher.findUnique({
    where: { id: Number(payload.teacherId) },
  });

  if (school && teacher) {
    const legalGuardianPayload: Prisma.LegalGuardianUncheckedCreateInput = {
      name: payload.legalGuardianName,
      taxId: payload.legalGuardianTaxId,
      email: payload.athleteEmail,
      rg: payload.legalGuardianRg,
      birthDate: new Date(payload.legalGuardianBirthDate),
      relationship: payload.legalGuardianRelationship,
    };

    const legalGuardian = await prisma.legalGuardian.create({ data: legalGuardianPayload });

    const athletePayload: Prisma.AthleteUncheckedCreateInput = {
      name: payload.athleteName,
      taxId: payload.athleteTaxId,
      rg: payload.athleteRg,
      birthDate: new Date(payload.athleteBirthDate),
      sex: payload.athleteSex,
      email: payload.athleteEmail,
      facebook: payload.athleteFacebook,
      phone: payload.athletePhone,
      cellphone: payload.athleteCellphone,
      federationId: school.federationId,
      legalGuardianId: legalGuardian.id,
    };

    const athlete = await prisma.athlete.create({ data: athletePayload });

    const athleteAddressPayload: Prisma.AddressUncheckedCreateInput = {
      zipcode: payload.athleteAddressZipCode.replace('-', ''),
      street: payload.athleteAddressStreet,
      number: payload.athleteAddressNumber,
      complement: payload.athleteAddressComplement,
      district: payload.athleteAddressDistrict,
      city: payload.athleteAddressCity,
      state: payload.athleteAddressState,
      sourceId: athlete.id,
      sourceType: 'Athlete',
    };

    await prisma.address.create({ data: athleteAddressPayload });

    const legalGuardianAddressPayload: Prisma.AddressUncheckedCreateInput = {
      zipcode: payload.legalGuardianAddressZipCode.replace('-', ''),
      street: payload.legalGuardianAddressStreet,
      number: payload.legalGuardianAddressNumber,
      complement: payload.legalGuardianAddressComplement,
      district: payload.legalGuardianAddressDistrict,
      city: payload.legalGuardianAddressCity,
      state: payload.legalGuardianAddressState,
      sourceId: legalGuardian.id,
      sourceType: 'LegalGuardian',
    };

    await prisma.address.create({ data: legalGuardianAddressPayload });

    const teacherAthletePayload: Prisma.TeacherAthleteUncheckedCreateInput = {
      athleteId: athlete.id,
      teacherId: teacher.id,
    };

    await prisma.teacherAthlete.create({ data: teacherAthletePayload });

    const schoolAthletePayload: Prisma.SchoolAthleteUncheckedCreateInput = {
      athleteId: athlete.id,
      schoolId: school.id,
      main: true,
    };

    await prisma.schoolAthlete.create({ data: schoolAthletePayload });
  }

  res.status(200).json({ status: 'ok' });
};

export default handler;
