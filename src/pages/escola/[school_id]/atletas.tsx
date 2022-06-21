import { Button, Container, Divider, Flex } from '@chakra-ui/react';
import * as yup from 'yup';

import Form from '~/components/Form';
import AddressGroup, { yupSchema } from '~/components/Form/AddressGroup';
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

const Athletes = () => {
  // eslint-disable-next-line no-console
  const onSubmit = (data: AthleteProps) => console.log(data);

  return (
    <Container maxWidth="container.lg">
      <Logo />

      <Form<AthleteProps> onSubmit={onSubmit} schema={schema}>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="athleteName" required />
            <TextField label="CPF" name="athleteTaxId" required />
            <TextField label="RG" width="50px" name="athleteRg" required />
            <TextField label="Data de Nascimento" name="athleteBirthDate" required />
            <RadioGroup label="Sexo" name="athleteSex" direction="column" options={sexOptions} required />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="athleteAddress" />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <TextField label="Nome completo" name="legalGuardianName" required />
            <TextField label="CPF" name="legalGuardianTaxId" required />
            <TextField label="RG" name="legalGuardianRg" required />
            <TextField label="Data de Nascimento" name="legalGuardianBirthDate" required />
            <Select label="Grau de parentesco" name="legalGuardianRelationship" options={relationshipOptions} required />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="legalGuardianAddress" />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4" />
          <Divider />
          <Flex gap="4" padding="4" justifyContent="center">
            <Button type="submit">Enviar</Button>
          </Flex>
        </Flex>
      </Form>
    </Container>
  );
};

export default Athletes;
