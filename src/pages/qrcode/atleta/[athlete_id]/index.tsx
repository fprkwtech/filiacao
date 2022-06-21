import { useEffect } from 'react';

import { Container, Divider, Flex } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

import Form from '~/components/Form';
import AddressGroup from '~/components/Form/AddressGroup';
import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface AthleteProps {
  athleteName: string;
  athleteTaxId: string;
  athleteRg: string;
  athleteBirthDate: string;
  athleteSex: string;
}

export interface Props {
  atlete: AthleteProps;
}

export async function getServerSideProps() {
  const atlete = await prisma.athlete.findFirst();

  return {
    props: {
      atlete: atlete?.name,
    },
  };
}

const Athletes = ({ atlete }: Props) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.athlete_id);
    console.log(atlete);
  });

  return (
    <Container maxWidth="container.lg">
      <Logo />

      {/* @ts-ignore */}
      <Form<AthleteProps>>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="athleteName" />
            <TextField label="CPF" name="athleteTaxId" />
            <TextField label="RG" name="athleteRg" />
            <TextField label="Data de Nascimento" name="athleteBirthDate" />
            <TextField label="Sexo" name="athleteSex" />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="athleteAddress" />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="legalGuardianName" />
            <TextField label="CPF" name="legalGuardianTaxId" />
            <TextField label="RG" name="legalGuardianRg" />
            <TextField label="Data de Nascimento" name="legalGuardianBirthDate" />
            <TextField label="Grau de parentesco" name="legalGuardianRelationship" />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="legalGuardianAddress" />
          </Flex>
        </Flex>
      </Form>
    </Container>
  );
};

export default Athletes;
