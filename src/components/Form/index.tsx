import React, { Children, createElement } from 'react';

import { useForm, UseFormProps, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { RequiredObjectSchema } from 'yup/lib/object';

export interface FormProps<T> extends UseFormProps<T, any> {
  schema: RequiredObjectSchema<any, any, any>;
  children: React.ReactNode;
  onSubmit?: (data: T) => void;
}

const Form = <T,>({ children, onSubmit, schema, ...props }: FormProps<T>) => {
  const methods = useForm<T>({ ...props, resolver: yupResolver(schema) });
  const { handleSubmit } = methods as any;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Children.map(children as unknown as React.ReactElement, (child: React.ReactElement) => {
          const element = child.props.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  control: methods.control,
                  key: child.props.name,
                },
              })
            : child;

          return element;
        })}
      </form>
    </FormProvider>
  );
};

Form.defaultProps = {
  reValidateMode: 'all',
  criteriaMode: 'all',
  mode: 'all',
};

export default Form;
