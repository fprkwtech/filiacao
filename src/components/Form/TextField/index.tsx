import { Controller } from 'react-hook-form';

import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export interface TextFieldProps extends FormControlProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  isReadOnly?: boolean;
  control?: any;
  onBlur?: (e: any) => void;
}

const TextField: React.ComponentType<TextFieldProps> = ({
  label,
  placeholder,
  required,
  isReadOnly,
  name,
  control,
  onBlur,
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    defaultValue=""
    render={({ field, fieldState }) => (
      <FormControl isRequired={required} isInvalid={!!fieldState.error} {...props}>
        <FormLabel>{label}:</FormLabel>
        <Input placeholder={placeholder} isReadOnly={isReadOnly} {...field} onBlur={onBlur ?? field.onBlur} />
        {fieldState.error && <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>}
      </FormControl>
    )}
  />
);

export default TextField;
