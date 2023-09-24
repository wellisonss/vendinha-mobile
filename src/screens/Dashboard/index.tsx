import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText } from './styles'

export function Dashboard(){
    return (
        <Container>
            <Header>
                <HeaderText> Resumo de dívidas</HeaderText>
            </Header>
            <StatusBar style="auto" />
        </Container>
    )
}