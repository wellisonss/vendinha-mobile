import React from "react";
import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps{
    title: string;
    type: 'save' | 'cancel';
}

export function Button({ title, type, ...rest }: Props){
    return (
    <Container type={type} {...rest}>
        <Title type={type}>
            {title}
        </Title>
    </Container>)
}
