import { Container, Flex, Divider, Button } from '@chakra-ui/react';
import * as yup from 'yup';

import DividerLabel from '~/components/DividerLabel';
import Form from '~/components/Form';
import AddressGroup, { yupSchema } from '~/components/Form/AddressGroup';
import FileField from '~/components/Form/FileField';
import RadioGroup, { RadioOptionProps } from '~/components/Form/RadioGroup';
import Select from '~/components/Form/Select';
import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

const schema = yup
  .object({
    teacherName: yup.string().required('Nome obrigatório!'),
    teacherTaxId: yup.string().required('CPF obrigatório!'),
    teacherRg: yup.string().required('RG obrigatório!'),
    teacherBirthDate: yup.string().required('Data de nascimento obrigatória!'),
    teacherSex: yup.string().required('Sexo obrigatório!'),
    teacherEmail: yup.string().required('E-mail obrigatório!'),
    teacherFacebook: yup.string(),
    teacherPhone: yup.string(),
    teacherCell: yup.string().required('Celular obrigatório!'),
  })
  .concat(yupSchema('teacherAddress'))
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

const Teacher = ({ school, fightStyle }) => {
  const onSubmit = (data: TeacherProps) => console.log(data);

  return (
    <Container maxWidth="container.lg" paddingBottom="6">
      <Logo />

      <Form<TeacherProps> onSubmit={onSubmit} schema={schema}>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <DividerLabel paddingBottom={0} label="Dados do Professor" />
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="teacherName" required />
            <TextField label="CPF" name="teacherTaxId" required />
            <TextField label="RG" name="teacherRg" required />
            <TextField label="Data de Nascimento" name="teacherBirthDate" required />
            <RadioGroup label="Sexo" name="teacherSex" direction="column" options={sexOptions} required />
          </Flex>
          <Flex gap="4" padding="4">
            <TextField label="E-mail" name="teacherEmail" required />
            <TextField label="Facebook" name="teacherFacebook" />
            <TextField label="Telefone" name="teacherPhone" />
            <TextField label="Celular" name="teacherCell" required />
          </Flex>
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="teacherAddress" />
          </Flex>
          <DividerLabel paddingBottom={0} label="Estilos de Luta" />
          <Flex gap="4" padding="4">
            <Select label="Estilos de Luta" name="fightStyleRelation" options={fightStyle} required />
          </Flex>
          <DividerLabel paddingBottom={0} label="Escola" />
          <Flex gap="4" padding="4">
            <Select label="Escola" name="schoolId" options={school} required />
          </Flex>
          <Flex gap="4" padding="4" justifyContent="space-around">
            <Flex gap="4" padding="4" direction="column">
              <FileField label="Foto 3x4" name="files.FOT" required />
              <FileField label="RG" name="files.RG" required />
            </Flex>
            <Flex gap="4" padding="4" direction="column">
              <FileField label="CPF" name="files.CPF" required />
              <FileField label="Comprovante de residência" name="files.COMPROVANTE_RESIDENCIA" required />
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

export async function getServerSideProps() {
  return {
    props: {
      school: [
        {
          value: 1,
          label: 'Nome da escola 1',
        },
        {
          value: 2,
          label: 'Nome da escola 2',
        },
        {
          value: 3,
          label: 'Nome da escola 3',
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

export default Teacher;
