import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Input } from '../Input';

import { Container, Error } from './styles';

interface InputFormProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  error?: string
}

export function InputForm<T extends FieldValues>({
  control,
  name,
  error,
  ...rest
}: InputFormProps<T>) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            name={name as string}
            {...rest}
          />
        )}
        name={name as Path<T>}
      />
      {error && <Error>{ error }</Error>}
    </Container>
  );
}
