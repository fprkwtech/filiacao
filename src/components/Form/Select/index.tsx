import { Controller } from 'react-hook-form';

import { FormControl, FormErrorMessage, FormLabel, Select as SelectUI } from '@chakra-ui/react';

export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  isReadOnly?: boolean;
  control?: any;
  options: SelectOptionProps[];
}

const Select: React.ComponentType<SelectProps> = ({ label, options, required, isReadOnly, name, control }) => (
  <Controller
    control={control}
    name={name}
    defaultValue=""
    render={({ field, fieldState }) => (
      <FormControl isRequired={required} isInvalid={!!fieldState.error}>
        <FormLabel>{label}:</FormLabel>
        <SelectUI isReadOnly={isReadOnly} {...field}>
          {options.map((option: SelectOptionProps) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectUI>
        {fieldState.error && <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>}
      </FormControl>
    )}
  />
);

export default Select;
