import React from "react";
import { TextInputProps } from 'react-native'
import { Container, Header, InputContainer, Text } from './styles'

interface InputProps extends TextInputProps {
    name: string;
  }

export function Input({ name, ...rest }: InputProps) {
  return (
    <InputContainer>
      <Header>
        <Text>{name}</Text>
      </Header>
      <Container {...rest} />
    </InputContainer>
  );
}


