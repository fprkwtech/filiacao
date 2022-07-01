import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fightstyles = [
  { name: 'Louva-a-Deus do Sul', category: 'Tradicional', region: 'Sul' },
  { name: 'Shaolin do Norte', category: 'Tradicional', region: 'Norte' },
  { name: 'Shaolin do Sul', category: 'Tradicional', region: 'Sul' },
  { name: 'Garra de Águia', category: 'Tradicional', region: 'Norte' },
  { name: 'Choy Lay Fut', category: 'Tradicional', region: 'Sul' },
  { name: 'Taichi (Tradicional)', category: 'Tradicional', region: 'N/A' },
  { name: 'ShuaiJiao', category: 'Tradicional', region: 'N/A' },
  { name: 'Ba Gua Zhang', category: 'Tradicional', region: 'N/A' },
  { name: 'Xin Yi', category: 'Tradicional', region: 'N/A' },
  { name: 'Shen She Quan', category: 'Tradicional', region: 'Sul' },
  { name: 'Wushu Desportivo Nan Quan', category: 'Moderno', region: 'Sul' },
  { name: 'Wushu Desportivo Chan Quan', category: 'Moderno', region: 'Norte' },
  { name: 'Wushu Desportivo Sanda', category: 'Moderno', region: 'N/A' },
  { name: 'Taichi (Moderno)', category: 'Moderno', region: 'N/A' },
  { name: 'Louva-a-Deus Flor de Ameixa', category: 'Tradicional', region: 'Norte' },
  { name: 'Louva-a-Deus Sete Estrelas', category: 'Tradicional', region: 'Norte' },
  { name: 'Louva-a-Deus Taiji', category: 'Tradicional', region: 'Norte' },
];

const load = async () => {
  try {
    await prisma.fightStyle.createMany({
      data: fightstyles,
    });

    // eslint-disable-next-line no-console
    console.log('Added category data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
