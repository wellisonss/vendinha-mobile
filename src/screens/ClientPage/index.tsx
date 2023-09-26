import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Header, HeaderText, ClientCards, ClientCardsList } from './styles';
import { ClientCard, ClientCardProps } from "../../components/ClientCard";
import { FabButton } from "../../components/Form/FabButton";

export interface DataListProps extends ClientCardProps {
    id: string;
}

export function ClientPage(){

    const data: DataListProps[] = [{
        id: '1',
        name: "Wellison Silva Santos",
        cpf: "02229769340",
        email: "silva.s.wellison@gmail.com",
        debt: "44"
    },
    {
        id: '2',
        name: "Wellison Silva Santos",
        cpf: "02229769340",
        email: "silva.s.wellison@gmail.com",
        debt: "44"
    },
    {
        id: '3',
        name: "Wellison Silva Santos",
        cpf: "02229769340",
        email: "silva.s.wellison@gmail.com",
        debt: "44"
    },
{
    id: '4',
    name: "Wellison Silva Santos",
    cpf: "02229769340",
    email: "silva.s.wellison@gmail.com",
    debt: "44"
},
{
    id: '5',
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

                <ClientCardsList 
                data={data}
                keyExtractor={(item: DataListProps) => item.id}
                renderItem={({ item }: { item: DataListProps }) => <ClientCard data={item}
                />}                />
             
            </ClientCards>
            <StatusBar style="auto" />
            <FabButton />
        </Container>
    )
}