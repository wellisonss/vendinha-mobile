import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native'

import { Container, Header, HeaderText, ClientCards, ClientCardsList } from './styles';
import { ClientCard, ClientCardProps } from "../../components/ClientCard";
import { FabButton } from "../../components/Form/FabButton";

import { ClientRegister } from '../ClientRegister'
import { useFetch } from '../../hooks/useFetch';

export interface DataListProps extends ClientCardProps {
    id: string;
}

type Client = {
    d: {
      results: {
        id: number;
        nome: string;
        cpf: string;
        email: string;
      }[];
    };
  };

  type Debts = {
    d: {
      results: {
        cliente: Client;
        id: number;
        ultimaAlteracao: string;
        criadoEm: string;
        valor: number;
        dataPagamento: string;
        descricao: string;
      }[];
    };
  };

export function ClientPage(){

    const { data: clients } = useFetch<Client>('api/Cliente/GetOData?%24count=true');

    const { data: debtsClients } = useFetch<Debts>('api/Divida/GetOData?%24count=true')


    const resultsClients = clients?.d?.results || [];

    const resultsDebts = debtsClients?.d?.results || [];

    console.log(resultsDebts);

    const [clientRegisterModalOpen, setClientRegisterModalOpen] = useState(false);

    function handleOpenClientRegisterModal(){
        setClientRegisterModalOpen(false)
    }

    function handleCloseClientRegisterModal(){
        setClientRegisterModalOpen(true)
    }

 // Mapeie os resultados da API para o formato de DataListProps e armazene em 'data'
 const data: DataListProps[] = resultsClients.map((result) => ({
    id: result.id.toString(),
    name: result.nome,
    cpf: result.cpf,
    email: result.email,
    debt: "44",
  }));

    return (
        <Container>
            <Header>
                <HeaderText>Cliente</HeaderText>
            </Header>
            <ClientCards>
                <ClientCardsList 
                data={data}
                keyExtractor={(item: DataListProps) => item.id}
                renderItem={({ item }: { item: DataListProps }) => <ClientCard data={item}
                />}
                />
            </ClientCards>
            <StatusBar style="auto" />
            <FabButton onPress={handleCloseClientRegisterModal}/>
            <Modal visible={clientRegisterModalOpen}>
                <ClientRegister closeClientRegister={handleOpenClientRegisterModal}/>
            </Modal>
        </Container>
    )
}