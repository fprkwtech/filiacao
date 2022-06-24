import { Container, Flex, Divider, Button } from '@chakra-ui/react';
import * as yup from 'yup';

import DividerLabel from '~/components/DividerLabel';
import Form from '~/components/Form';
import AddressGroup, { yupSchema } from '~/components/Form/AddressGroup';
import FileField from '~/components/Form/FileField';
import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

const schema = yup
  .object({
    schoolName: yup.string().required('Razão social obrigatória!'),
    tradeName: yup.string(),
    schoolTaxId: yup.string().required('CNPJ obrigatório!'),
  })
  .concat(yupSchema('schoolAddress'))
  .required();

const School = () => {
  const onSubmit = (data: SchoolProps) => console.log(data);

  return (
    <Container maxWidth="container.lg" paddingBottom="6">
      <Logo />

      <Form<SchoolProps> onSubmit={onSubmit} schema={schema}>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <DividerLabel paddingBottom={0} label="Dados da Escola" />
          <Flex gap="4" padding="4">
            <TextField label="Razão social" name="schoolName" required />
            <TextField label="Nome fantasia" name="tradeName" />
            <TextField label="CNPJ" name="schoolTaxId" required />
          </Flex>
          <Flex gap="4" padding="4">
            <AddressGroup prefixName="schoolAddress" />
          </Flex>
          <Flex gap="4" padding="4" justifyContent="space-around">
            <FileField label="Alvará de Funcionamento" name="files.ALVARA" required />
            <FileField label="Comprovante de Endereço" name="files.COMPROVANTE_RESIDENCIA" required />
          </Flex>
          <Flex gap="4" padding="4" justifyContent="center">
            <Button type="submit">Enviar</Button>
          </Flex>
        </Flex>
      </Form>
    </Container>
  );
};

export default School;
