import { useForm } from 'react-hook-form';

import { Container, Divider, Flex, Text } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface SchoolProps {
  schoolCompanyName: string;
  schoolTradeName: string;
  schoolTaxId: string;
  schoolAddresses?: {
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
  school?: SchoolProps;
}

export async function getServerSideProps({ params }: { params: { school_id?: string } }) {
  if (params.school_id && !isNaN(+params.school_id)) {
    const school = await prisma.school.findFirst({
      where: { id: +params.school_id },
      include: { address: true },
    });

    if (school)
      return {
        props: {
          school: {
            schoolCompanyName: school?.companyName,
            schoolTradeName: school?.tradeName,
            schoolTaxId: school?.taxId,
            schoolAddresses: school?.address,
          },
        },
      };

    return { props: {} };
  }

  return { props: {} };
}

const Schools = ({ school }: Props) => {
  const { control } = useForm();

  return (
    <Container maxWidth="container.lg">
      <Logo />
      {school ? (
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Text textAlign="center" marginTop={'5px'} fontSize="2xl">
            Escola
          </Text>
          <Flex gap="4" padding="4">
            <TextField
              control={control}
              label="Nome da Escola"
              name="schoolCompanyName"
              isReadOnly={true}
              placeholder={school.schoolCompanyName}
            />
            <TextField
              control={control}
              label="Nome Fantasia"
              name="schoolTradeName"
              isReadOnly={true}
              placeholder={school.schoolTradeName}
            />
            <TextField control={control} label="CNPJ" name="schoolTaxId" isReadOnly={true} placeholder={school.schoolTaxId} />
          </Flex>
          <Divider />
          <>
            {school.schoolAddresses?.map((address) => {
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
          Escola não encontrada
        </Text>
      )}
    </Container>
  );
};

export default Schools;
