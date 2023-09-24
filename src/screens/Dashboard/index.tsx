import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText } from './styles'
import { DebtsCard } from "../../components/DebtsCards";

export function Dashboard(){
    return (
        <Container>
            <Header>
                <HeaderText> Resumo de dívidas</HeaderText>
            </Header>
            <DebtsCard></DebtsCard>
            <StatusBar style="auto" />
        </Container>
    )
}