import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText, ClientCards } from './styles';
import { ClientCard } from "../../components/ClientCard";

export function ClientPage(){

    const data = [{
        name: "Wellison Silva Santos",
        cpf: "02229769340",
        email: "silva.s.wellison@gmail.com",
        debt: "44"
    }];

    return (
        <Container>
            <Header>
                <HeaderText>Cliente</HeaderText>
            </Header>
            <ClientCards >
                <ClientCard data={data[0]}/>
             
            </ClientCards>
            <StatusBar style="auto" />
        </Container>
    )
}