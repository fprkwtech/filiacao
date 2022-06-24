import { Controller } from 'react-hook-form';

import { Flex, FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup as RadioGroupUI } from '@chakra-ui/react';

export interface RadioOptionProps {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  control?: any;
  options: RadioOptionProps[];
  direction?: 'row' | 'column';
}

const RadioGroup: React.ComponentType<RadioGroupProps> = ({ label, options, required, name, direction, control }) => (
  <Controller
    control={control}
    name={name}
    defaultValue=""
    render={({ field, fieldState }) => (
      <FormControl isRequired={required} isInvalid={!!fieldState.error}>
        <FormLabel>{label}:</FormLabel>
        <RadioGroupUI {...field}>
          <Flex direction={direction}>
            {options.map((option: RadioOptionProps) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Flex>
        </RadioGroupUI>
        {fieldState.error && <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>}
      </FormControl>
    )}
  />
);

export default RadioGroup;
