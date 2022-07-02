import { useForm } from 'react-hook-form';

import { Container, Divider, Flex, Text } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface AthleteProps {
  athleteName: string;
  athleteTaxId: string;
  athleteRg: string;
  athleteBirthDate: string;
  athleteSex: string;
  athleteAddresses?: {
    zipcode: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    city: string;
    state: string;
  }[];
}

export interface GuardianProps {
  guardianName: string;
  guardianTaxId: string;
  guardianRg: string;
  guardianBirthDate: string;
  guardianRelationship: string;
  guardianAddresses?: {
    zipcode: string;
    street: string;
    number: number;
    complement: string;
    district: string;
    city: string;
    state: string;
  }[];
}

export interface Props {
  athlete?: AthleteProps;
  guardian?: GuardianProps;
}

export async function getServerSideProps({ params }: { params: { athlete_id?: string } }) {
  if (params.athlete_id && !isNaN(+params.athlete_id)) {
    const athlete = await prisma.athlete.findFirst({
      where: { id: +params.athlete_id },
      include: { address: true, legalGuardian: true },
    });

    if (athlete)
      return {
        props: {
          athlete: {
            athleteName: athlete?.name,
            athleteRg: athlete?.rg,
            athleteTaxId: athlete?.taxId,
            athleteBirthDate: athlete?.birthDate.toLocaleDateString('pt-BR'),
            athleteSex: athlete ? (athlete.sex === 'M' ? 'Masculino' : 'Feminino') : undefined,
            athleteGuardianId: athlete?.legalGuardianId,
            athleteAddresses: athlete?.address,
          },
          guardian: {
            guardianName: athlete?.legalGuardian?.name,
            guardianTaxId: athlete?.legalGuardian?.taxId,
            guardianRg: athlete?.legalGuardian?.rg,
            guardianBirthDate: athlete?.legalGuardian?.birthDate.toLocaleDateString('pt-BR'),
            guardianRelationship: athlete?.legalGuardian?.relationship,
            // TODO esperar os endereços do guardiao
            guardianAddresses: null,
          },
        },
      };

    return { props: {} };
  }

  return { props: {} };
}

const Athletes = ({ athlete, guardian }: Props) => {
  const { control } = useForm();

  return (
    <Container maxWidth="container.lg">
      <Logo />
      {athlete && guardian ? (
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Text textAlign="center" marginTop={'5px'} fontSize="2xl">
            Atleta
          </Text>
          <Flex gap="4" padding="4">
            <TextField
              control={control}
              label="Nome completo"
              name="athleteName"
              isReadOnly={true}
              placeholder={athlete.athleteName}
            />
            <TextField control={control} label="CPF" name="athleteTaxId" isReadOnly={true} placeholder={athlete.athleteTaxId} />
            <TextField control={control} label="RG" name="athleteRg" isReadOnly={true} placeholder={athlete.athleteRg} />
            <TextField
              control={control}
              label="Data de Nascimento"
              name="athleteBirthDate"
              isReadOnly={true}
              placeholder={athlete.athleteBirthDate}
            />
            <TextField control={control} label="Sexo" name="athleteSex" isReadOnly={true} placeholder={athlete.athleteSex} />
          </Flex>
          <Divider />
          <>
            {athlete.athleteAddresses?.map((address) => {
              <>
                <Flex gap="4" padding="4">
                  <TextField control={control} label="CEP" name={'ZipCode'} isReadOnly={true} placeholder={address.zipcode} />
                  <TextField control={control} label="Endereço" name={'Street'} isReadOnly={true} placeholder={address.street} />
                  <TextField
                    control={control}
                    label="Número"
                    name={'Number'}
                    isReadOnly={true}
                    placeholder={String(address.number)}
                  />
                  <TextField
                    control={control}
                    label="Complemento"
                    name={'Complement'}
                    isReadOnly={true}
                    placeholder={address.complement}
                  />
                  <TextField
                    control={control}
                    label="Bairro"
                    name={'District'}
                    isReadOnly={true}
                    placeholder={address.district}
                  />
                  <TextField control={control} label="Cidade" name={'City'} isReadOnly={true} placeholder={address.city} />
                  <TextField control={control} label="Estado" name={'State'} isReadOnly={true} placeholder={address.state} />
                </Flex>
                <Divider />
              </>;
            })}
          </>
          <Text textAlign="center" marginTop={'5px'} fontSize="2xl">
            Guardião Legal
          </Text>
          <Flex gap="4" padding="4">
            <TextField
              control={control}
              label="Nome completo"
              name="legalGuardianName"
              isReadOnly={true}
              placeholder={guardian.guardianName}
            />
            <TextField
              control={control}
              label="CPF"
              name="legalGuardianTaxId"
              isReadOnly={true}
              placeholder={guardian.guardianTaxId}
            />
            <TextField control={control} label="RG" name="legalGuardianRg" isReadOnly={true} placeholder={guardian.guardianRg} />
            <TextField
              control={control}
              label="Data de Nascimento"
              name="legalGuardianBirthDate"
              isReadOnly={true}
              placeholder={guardian.guardianBirthDate}
            />
            <TextField
              control={control}
              label="Grau de parentesco"
              name="legalGuardianRelationship"
              isReadOnly={true}
              placeholder={guardian.guardianRelationship}
            />
          </Flex>
          <Divider />
          <>
            {guardian.guardianAddresses?.map((address) => {
              <>
                <Flex gap="4" padding="4">
                  <TextField control={control} label="CEP" name={'ZipCode'} isReadOnly={true} placeholder={address.zipcode} />
                  <TextField control={control} label="Endereço" name={'Street'} isReadOnly={true} placeholder={address.street} />
                  <TextField
                    control={control}
                    label="Número"
                    name={'Number'}
                    isReadOnly={true}
                    placeholder={String(address.number)}
                  />
                  <TextField
                    control={control}
                    label="Complemento"
                    name={'Complement'}
                    isReadOnly={true}
                    placeholder={address.complement}
                  />
                  <TextField
                    control={control}
                    label="Bairro"
                    name={'District'}
                    isReadOnly={true}
                    placeholder={address.district}
                  />
                  <TextField control={control} label="Cidade" name={'City'} isReadOnly={true} placeholder={address.city} />
                  <TextField control={control} label="Estado" name={'State'} isReadOnly={true} placeholder={address.state} />
                </Flex>
                <Divider />
              </>;
            })}
          </>
        </Flex>
      ) : (
        <Text textAlign="center" marginTop={'5px'} fontSize="4xl">
          Atleta não encontrado
        </Text>
      )}
    </Container>
  );
};

export default Athletes;
