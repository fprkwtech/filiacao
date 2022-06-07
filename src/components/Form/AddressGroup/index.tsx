import { useState } from 'react';

import { useFormContext } from 'react-hook-form';

import * as yup from 'yup';

import Select, { SelectOptionProps } from '../Select';
import TextField from '../TextField';

const statesOptions: SelectOptionProps[] = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
];

export interface AddressGroupProps {
  prefixName: string;
}

const AddressGroup: React.ComponentType<AddressGroupProps> = ({ prefixName }) => {
  const { setValue } = useFormContext();
  const [isReadOnly, setIsReadOnly] = useState(true);

  // const zipCode = watch(`${prefixName}ZipCode`);

  const getAddress = async (zipCode: string) => {
    setIsReadOnly(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const { cep, logradouro, bairro, localidade, uf } = await response.json();

      if (!localidade) {
        throw new Error('Endereço não encontrado');
      }

      setValue(`${prefixName}ZipCode`, cep);
      setValue(`${prefixName}Street`, logradouro);
      setValue(`${prefixName}District`, bairro);
      setValue(`${prefixName}City`, localidade);
      setValue(`${prefixName}State`, uf);

      logradouro ?? setIsReadOnly(false);
    } catch (error) {
      setIsReadOnly(false);
    }
  };

  const handleAddress = (e: any) => {
    getAddress(e.target.value);
  };

  return (
    <>
      <TextField label="CEP" name={`${prefixName}ZipCode`} onBlur={handleAddress} required />
      <TextField label="Endereço" name={`${prefixName}Street`} required isReadOnly={isReadOnly} />
      <TextField label="Número" name={`${prefixName}Number`} />
      <TextField label="Complemento" name={`${prefixName}Complement`} />
      <TextField label="Bairro" name={`${prefixName}District`} required isReadOnly={isReadOnly} />
      <TextField label="Cidade" name={`${prefixName}City`} required isReadOnly={isReadOnly} />
      <Select
        label="Estado"
        name={`${prefixName}State`}
        options={[{ label: 'Escolha um estado', value: '' }, ...statesOptions]}
        required
        isReadOnly={isReadOnly}
      />
    </>
  );
};

export const yupSchema: any = (prefixName: string) => {
  const schema = yup.object({
    [`${prefixName}ZipCode`]: yup.string().required(),
    [`${prefixName}Street`]: yup.string().required('Rua é obrigatória'),
    [`${prefixName}Number`]: yup.string(),
    [`${prefixName}Complement`]: yup.string(),
    [`${prefixName}District`]: yup.string().required(),
    [`${prefixName}City`]: yup.string().required(),
    [`${prefixName}State`]: yup
      .string()
      .oneOf(statesOptions.map(({ value }) => value))
      .required(),
  });

  return schema;
};

export default AddressGroup;
