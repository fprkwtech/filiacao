import { Text } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';

import Counter from '~/components/Counter';

const prisma = new PrismaClient();

export interface FederationProps {
  id: number;
  tradeName: string;
}

export interface HomeProps {
  federations: FederationProps[];
}

export async function getServerSideProps() {
  const results = await prisma.federation.findMany();

  return {
    props: {
      federations: results.map(({ id, tradeName }) => ({ id, tradeName })),
    },
  };
}

const Home = ({ federations }: HomeProps) => (
  <>
    {federations.map(({ id, tradeName }) => (
      <Text key={id}>{tradeName}</Text>
    ))}

    <Counter />
  </>
);

export default Home;
