import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import Badge from '~/components/Badge';
import pdfHelper from '~/lib/pdfHelper';
import { Carteirinha } from '~/types/carteirinha';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { athleteId } = req.query;
  let carteirinha: Carteirinha;

  try {
    const athlete = await prisma.athlete.findUnique({
      where: {
        id: Number(athleteId),
      },
    });
    const athleteAddress = await prisma.address.findUnique({
      where: {
        unique_sourceId_sourceType: { sourceId: Number(athleteId), sourceType: 'Athlete' },
      },
    });

    const dueDate = await prisma.validateHistory.findUnique({
      where: {
        unique_sourceId_sourceType: { sourceId: Number(athleteId), sourceType: 'Athlete' },
      },
    });

    //TODO buscar as informações do professor daquele atleta
    // const athleteProfessor = await prisma.teacherAthlete.findUnique({
    // });

    carteirinha = {
      name: athlete?.name,
      birthDate: athlete?.birthDate.toISOString().split('T')[0],
      city: athleteAddress?.city,
      dueDate: dueDate?.dueDate.toISOString().split('T')[0],
      professor: 'FPRKW',
      registro: '123456789',
      rg: athlete?.rg,
    };

    if (carteirinha) {
      pdfHelper.componentToPDFBuffer(<Badge carteirinha={carteirinha} />).then((buffer) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.end(buffer);
      });
    } else {
      //TODO tratativa de erro caso tenha erro ao buscar as informações da carteirinha
    }
  } catch (err) {
    res.status(400).send('Houve um erro ao tentar buscar os dados do usuário para o preenchimento da carteirinha');
  }
}
