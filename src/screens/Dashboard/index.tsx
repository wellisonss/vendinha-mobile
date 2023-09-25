import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText, DebtsCards } from './styles'
import { DebtsCard } from "../../components/DebtsCards";

export function Dashboard(){

    const data = [{
        title: "Dívidas em aberto",
        amount:"32",
        total:"43"
    },
    {
        title: "Dívidas pagas",
        amount:"32",
        total:"43"
    },
    {
        title: "Dívidas cadastradas",
        amount:"32",
        total:"43"
    }]

    return (
        <Container>
            <Header>
                <HeaderText> Resumo de dívidas</HeaderText>
            </Header>
            <DebtsCards >
                <DebtsCard data={data[0]}/>
                <DebtsCard data={data[1]}/>
                <DebtsCard data={data[2]}/>
            </DebtsCards>
            <StatusBar style="auto" />
        </Container>
    )
}