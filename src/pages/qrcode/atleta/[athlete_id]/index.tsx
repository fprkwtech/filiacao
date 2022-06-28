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
  atlete?: AthleteProps;
  guardian?: GuardianProps;
}

export async function getServerSideProps(query: { params: { athlete_id: string } }) {
  // console.log(query.params.athlete_id);
  const atlete = await prisma.athlete.findFirst({
    where: { id: +query.params.athlete_id },
    include: { address: true, legalGuardian: true },
  });

  if (atlete)
    return {
      props: {
        atlete: {
          athleteName: atlete?.name,
          athleteRg: atlete?.rg,
          athleteTaxId: atlete?.taxId,
          athleteBirthDate: atlete?.birthDate.toLocaleDateString('pt-BR'),
          athleteSex: atlete ? (atlete.sex === 'M' ? 'Masculino' : 'Feminino') : undefined,
          athleteGuardianId: atlete?.legalGuardianId,
          athleteAddresses: atlete?.address,
        },
        guardian: {
          guardianName: atlete?.legalGuardian?.name,
          guardianTaxId: atlete?.legalGuardian?.taxId,
          guardianRg: atlete?.legalGuardian?.rg,
          guardianBirthDate: atlete?.legalGuardian?.birthDate.toLocaleDateString('pt-BR'),
          guardianRelationship: atlete?.legalGuardian?.relationship,
          // TODO esperar os endereços do guardiao
          guardianAddresses: null,
        },
      },
    };

  return { props: {} };
}

const Athletes = ({ atlete, guardian }: Props) => {
  const { control } = useForm();

  return (
    <Container maxWidth="container.lg">
      <Logo />
      {atlete && guardian ? (
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
              placeholder={atlete.athleteName}
            />
            <TextField control={control} label="CPF" name="athleteTaxId" isReadOnly={true} placeholder={atlete.athleteTaxId} />
            <TextField control={control} label="RG" name="athleteRg" isReadOnly={true} placeholder={atlete.athleteRg} />
            <TextField
              control={control}
              label="Data de Nascimento"
              name="athleteBirthDate"
              isReadOnly={true}
              placeholder={atlete.athleteBirthDate}
            />
            <TextField control={control} label="Sexo" name="athleteSex" isReadOnly={true} placeholder={atlete.athleteSex} />
          </Flex>
          <Divider />
          <>
            {atlete.athleteAddresses?.map((address) => {
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
