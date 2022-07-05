import { useForm } from 'react-hook-form';

import { Container, Divider, Flex, Text } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface TeacherProps {
  teacherName: string;
  teacherCode: string;
  teacherTaxId: string;
  teacherRg: string;
  teacherBirthDate: string;
  teacherIssuingAgency: string;
  teacherSex: string;
  teacherAddresses?: {
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
  teacher?: TeacherProps;
}

export async function getServerSideProps(query: { params: { teacher_id: string } }) {
  const teacher = await prisma.teacher.findFirst({
    where: { id: +query.params.teacher_id },
    include: { address: true },
  });

  if (teacher)
    return {
      props: {
        teacher: {
          teacherName: teacher?.name,
          teacherCode: teacher?.code,
          teacherRg: teacher?.rg,
          teacherTaxId: teacher?.taxId,
          teacherIssuingAgency: teacher?.issuingAgency,
          teacherBirthDate: teacher?.birthDate.toLocaleDateString('pt-BR'),
          teacherSex: teacher ? (teacher.sex === 'M' ? 'Masculino' : 'Feminino') : undefined,
          teacherAddresses: teacher?.address,
        },
      },
    };

  return { props: {} };
}

const Teachers = ({ teacher }: Props) => {
  const { control } = useForm();

  return (
    <Container maxWidth="container.lg">
      <Logo />
      {teacher ? (
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Text textAlign="center" marginTop={'5px'} fontSize="2xl">
            Professor
          </Text>
          <Flex gap="4" padding="4">
            <TextField
              control={control}
              label="Nome completo"
              name="teacherName"
              isReadOnly={true}
              placeholder={teacher.teacherName}
            />
            <TextField control={control} label="Codigo" name="teacherCode" isReadOnly={true} placeholder={teacher.teacherCode} />
            <TextField control={control} label="CPF" name="teacherTaxId" isReadOnly={true} placeholder={teacher.teacherTaxId} />
            <TextField control={control} label="RG" name="teacherRg" isReadOnly={true} placeholder={teacher.teacherRg} />
            <TextField
              control={control}
              label="agência emissora"
              name="teacherIssuingAgency"
              isReadOnly={true}
              placeholder={teacher.teacherIssuingAgency}
            />
            <TextField
              control={control}
              label="Data de Nascimento"
              name="teacherBirthDate"
              isReadOnly={true}
              placeholder={teacher.teacherBirthDate}
            />
            <TextField control={control} label="Sexo" name="teacherSex" isReadOnly={true} placeholder={teacher.teacherSex} />
          </Flex>
          <Divider />
          <>
            {teacher.teacherAddresses?.map((address) => {
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
          Professor não encontrado
        </Text>
      )}
    </Container>
  );
};

export default Teachers;
