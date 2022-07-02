import { Button, Container, Divider, Flex } from '@chakra-ui/react';
import * as yup from 'yup';

import Form from '~/components/Form';
import Select, { SelectOptionProps } from '~/components/Form/Select';
import TextField from '~/components/Form/TextField';
import Logo from '~/components/Logo';

export interface FightStyleProps {
  fightStyleName: string;
  fightStyleCategory: string;
  fightStyleRegion: string;
}

const schema = yup
  .object({
    fightStyleName: yup.string().required(),
    fightStyleCategory: yup.string().required(),
    fightStyleRegion: yup.string().required(),
  })
  .required();

const regionOptions: SelectOptionProps[] = [
  { label: 'Escolha uma região', value: '' },
  { label: 'Norte', value: 'norte' },
  { label: 'Sul', value: 'sul' },
  { label: 'Leste', value: 'leste' },
  { label: 'Oeste', value: 'oeste' },
  { label: 'Outros', value: 'outros' },
];

const categoryOptions: SelectOptionProps[] = [
  { label: 'Escolha uma categoria', value: '' },
  { label: 'Moderno', value: 'moderno' },
  { label: 'Tradicional', value: 'tradicional' },
  { label: 'Shuaijiao', value: 'shuaijiao' },
  { label: 'Sanda', value: 'sanda' },
  { label: 'Outros', value: 'outros' },
];

const FightStyles = () => {
  const onSubmit = (data: FightStyleProps) => data;

  return (
    <Container maxWidth="container.lg">
      <Logo />

      <Form<FightStyleProps> onSubmit={onSubmit} schema={schema}>
        <Flex direction="column" gap="4" bg="white" borderRadius="8">
          <Divider />
          <Flex gap="4" padding="4">
            <TextField label="Nome do estilo" name="fightStyleName" required />
            <Select label="Categoria" name="fightStyleCategory" options={categoryOptions} required />
            <Select label="Região" name="fightStyleRegion" options={regionOptions} required />
          </Flex>
          <Divider />
          <Flex gap="4" padding="4" justifyContent="center">
            <Button type="submit">Enviar</Button>
          </Flex>
        </Flex>
      </Form>
    </Container>
  );
};

export default FightStyles;
