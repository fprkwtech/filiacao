import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import Badge from '~/components/Badge';
import pdfHelper from '~/lib/pdfHelper';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { athleteId } = req.query;

  try {
    const athlete = await prisma.athlete.findUnique({
      where: {
        id: Number(athleteId),
      },
    });

    if (athlete) {
      pdfHelper.componentToPDFBuffer(<Badge athlete={athlete} />).then((buffer) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.end(buffer);
      });
    }
  } catch (err) {
    res.status(400).send('Houve um erro ao tentar buscar os dados do usuário para o preenchimento da carteirinha');
  }
}
