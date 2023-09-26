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
        id: number;
        nome: string;
        cpf: string;
        email: string;
  };

  type Debts = {
        cliente: Client;
        id: number;
        ultimaAlteracao: string;
        criadoEm: string;
        valor: number;
        dataPagamento: string;
        descricao: string;
  };

export function ClientPage(){

    const { data: clients, isFetching: isFetchingClients } = useFetch<Client[]>('api/Cliente/GetOData?%24count=true');

    const { data: debtsClients, isFetching: isFetchingDebts } = useFetch<Debts[]>('api/Divida/GetOData?%24count=true');

    const [clientRegisterModalOpen, setClientRegisterModalOpen] = useState(false);

    function handleOpenClientRegisterModal(){
        setClientRegisterModalOpen(false)
    }

    function handleCloseClientRegisterModal(){
        setClientRegisterModalOpen(true)
    }

    let data: DataListProps[] = [];

    if (clients && debtsClients) {
      data = clients.map((result) => {
        const clientId = result.id;
        const maxDebt = debtsClients
          .filter((debt) => debt.cliente.id === clientId)
          .reduce((max, debt) => {
            const currentDebt = debt.valor;
            return !isNaN(currentDebt) && currentDebt > max ? currentDebt : max;
          }, 0);
      
        return {
          id: clientId.toString(),
          name: result.nome,
          cpf: result.cpf,
          email: result.email,
          debt: maxDebt.toString(),
        };
      });
    }
    
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