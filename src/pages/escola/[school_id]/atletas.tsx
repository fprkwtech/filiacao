import { Button, Container, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { NextApiRequest } from 'next';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import DividerLabel from '~/components/DividerLabel';
import Form from '~/components/Form';
import AddressGroup, { yupSchema } from '~/components/Form/AddressGroup';
import FileField from '~/components/Form/FileField';
import RadioGroup, { RadioOptionProps } from '~/components/Form/RadioGroup';
import Select, { SelectOptionProps } from '~/components/Form/Select';
import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface AthleteProps {
  athleteName: string;
  athleteTaxId: string;
  athleteRg: string;
  athleteBirthDate: string;
  athleteSex: string;
}

const schema = yup
  .object({
    athleteName: yup.string().required('Nome obrigatório!'),
    athleteTaxId: yup.string().required('CPF obrigatório!'),
    athleteRg: yup.string().required('RG obrigatório!'),
    athleteBirthDate: yup.string().required('Data de nascimento obrigatória!'),
    athleteSex: yup.string().required('Sexo obrigatório!'),
    legalGuardianName: yup.string().required('Nome obrigatório!'),
    legalGuardianTaxId: yup.string().required('CPF obrigatório!'),
    legalGuardianRg: yup.string().required('RG obrigatório!'),
    legalGuardianBirthDate: yup.string().required('Data de nascimento obrigatória!'),
    legalGuardianRelationship: yup.string().required('Grau de parentesco obrigatório!'),
  })
  .concat(yupSchema('athleteAddress'))
  .concat(yupSchema('legalGuardianAddress'))
  .required();

const sexOptions: RadioOptionProps[] = [
  {
    label: 'Masculino',
    value: 'M',
  },
  {
    label: 'Feminino',
    value: 'F',
  },
];

const relationshipOptions: SelectOptionProps[] = [
  { label: 'Escolha um relacionamento', value: '' },
  { label: 'Conjuge', value: 'conjuge' },
  { label: 'Pai', value: 'pai' },
  { label: 'Mãe', value: 'mae' },
  { label: 'Irmão (a)', value: 'irmao' },
  { label: 'Tio (a)', value: 'tio' },
  { label: 'Avô (ó)', value: 'avo' },
];

const Athletes = ({ school, teachers, fightStyle }: any) => {
  const router = useRouter();

  const onSubmit = async (payload: AthleteProps) => {
    try {
      const { data } = await axios.post(`/api/escola/${school.id}/atletas`, { payload });

      if (data.status === 'ok') {
        router.push(`/escola/${school.id}/atletas/concluido`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="container.lg">
      <Logo />

      <Form<AthleteProps> onSubmit={onSubmit} schema={schema}>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <DividerLabel label="Dados do Atleta" width="full" />
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="athleteName" required />
            <TextField label="CPF" name="athleteTaxId" required />
            <TextField label="RG" name="athleteRg" required />
            <TextField label="Data de Nascimento" name="athleteBirthDate" required />
            <RadioGroup label="Sexo" name="athleteSex" direction="column" options={sexOptions} required />
          </Flex>
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="athleteAddress" />
          </Flex>
          <DividerLabel label="Dados do Responsável" width="full" />
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="legalGuardianName" required />
            <TextField label="CPF" name="legalGuardianTaxId" required />
            <TextField label="RG" name="legalGuardianRg" required />
            <TextField label="Data de Nascimento" name="legalGuardianBirthDate" required />
            <Select label="Grau de parentesco" name="legalGuardianRelationship" options={relationshipOptions} required />
          </Flex>
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="legalGuardianAddress" />
          </Flex>
          <DividerLabel label="Dados do Professor Responsável" width="full" />
          <Flex gap="4" padding="4">
            <Text>{school.name}</Text>
            <Select label="Professor" name="teacher" options={teachers} required />
          </Flex>
          <DividerLabel label="Estilos de luta" width="full" />
          <Flex gap="4" padding="4">
            <Select label="Professor" name="fightStyle" options={fightStyle} required />
          </Flex>
          <DividerLabel label="Anexo de documentos do Atleta" width="full" />
          <Flex gap="4" padding="4" justifyContent="space-around">
            <Flex gap="4" padding="4" direction="column">
              <FileField label="Foto 3x4" name="files.FOTO" />
              <FileField label="RG" name="files.RG" />
            </Flex>
            <Flex gap="4" padding="4" direction="column">
              <FileField label="CPF" name="files.CPF" />
              <FileField label="Comprovante de residência" name="files.COMPROVANTE_RESIDENCIA" />
            </Flex>
          </Flex>
          <Flex gap="4" padding="4" justifyContent="center">
            <Button type="submit">Enviar</Button>
          </Flex>
        </Flex>
      </Form>
    </Container>
  );
};

export async function getServerSideProps(req: NextApiRequest) {
  const { school_id } = req.query;

  return {
    props: {
      school: {
        id: school_id,
        name: 'Nome da escola',
      },
      teachers: [
        {
          value: 1,
          label: 'Prof. 1',
        },
        {
          value: 2,
          label: 'Prof. 2',
        },
        {
          value: 3,
          label: 'Prof. 3',
        },
      ],
      fightStyle: [
        {
          value: 1,
          label: 'Louva-a-deus',
        },
        {
          value: 2,
          label: 'Shaolin do Norte',
        },
        {
          value: 3,
          label: 'Garra de Águia',
        },
      ],
    },
  };
}

export default Athletes;
