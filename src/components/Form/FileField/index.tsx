import { Controller } from 'react-hook-form';

import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export interface FileFieldProps extends FormControlProps {
  label: string;
  name: string;
  required?: boolean;
  control?: any;
  onBlur?: (e: any) => void;
}

const FileField: React.ComponentType<FileFieldProps> = ({ label, required, name, control, onBlur, ...props }) => (
  <Controller
    control={control}
    name={name}
    defaultValue=""
    render={({ field, fieldState }) => (
      <FormControl isRequired={required} isInvalid={!!fieldState.error} {...props}>
        <FormLabel>{label}:</FormLabel>
        <Input type="file" variant="unstyled" {...field} onBlur={onBlur ?? field.onBlur} />
        {fieldState.error && <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>}
      </FormControl>
    )}
  />
);

export default FileField;
