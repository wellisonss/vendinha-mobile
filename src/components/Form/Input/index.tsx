import React from "react";
import { TextInputProps } from 'react-native'
import { Container, Header, InputContainer, Text } from './styles'

interface InputProps extends TextInputProps {
    name: string;
  }

export function Input({ name, ...rest }: InputProps) {
   // Transforme a primeira letra do `name` em maiúscula
   const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <InputContainer>
      <Header>
        <Text>{formattedName}</Text>
      </Header>
      <Container {...rest} />
    </InputContainer>
  );
}


