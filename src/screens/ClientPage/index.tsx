import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native'

import { Container, Header, HeaderText, ClientCards, ClientCardsList } from './styles';
import { ClientCard, ClientCardProps } from "../../components/ClientCard";
import { InforClient } from "../InforClient"
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
        debt?: string,
        dataNascimento: string
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

    // const clients = [{
    //   id: 1,
    //   ultimaAlteracao: "2023-08-17T09:13:46.609788-03:00",
    //   criadoEm: "2023-08-17T09:13:46.609773-03:00",
    //   nome: "Interfocus teste 1",
    //   email: "teste@email.com",
    //   cpf: "31025715063",
    //   dataNascimento: "2001-08-01T00:00:00"
    // }]

    const { data: debtsClients, isFetching: isFetchingDebts } = useFetch<Debts[]>('api/Divida/GetOData?%24count=true');

    // const debtsClients = [{
    //   cliente: {
    //     id: 1,
    //     ultimaAlteracao: "2023-08-17T09:13:46.609788-03:00",
    //     criadoEm: "2023-08-17T09:13:46.609773-03:00",
    //     nome: "Interfocus teste 1",
    //     email: "teste@email.com",
    //     cpf: "31025715063",
    //     dataNascimento: "2001-08-01T00:00:00"
    //   },
    //   id: 1,
    //   ultimaAlteracao: "2023-08-17T09:55:08.978384-03:00",
    //   criadoEm: "2023-08-17T09:54:45.085488-03:00",
    //   valor: 10,
    //   dataPagamento: "2023-08-17T09:55:07.440518-03:00",
    //   descricao: "Dinheiro"
    // }]

    const [clientRegisterModalOpen, setClientRegisterModalOpen] = useState(false);

    const [clientInforModalOpen, setClientInforModalOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState<ClientCardProps | null>(null);


    function handleOpenClientRegisterModal(){
        setClientRegisterModalOpen(false)
    }

    function handleCloseClientRegisterModal(){
        setClientRegisterModalOpen(true)
    }

    function handleOpenClientInforModal(){
      setClientInforModalOpen(false)
  }

    function handleClientCardClick(itemData: ClientCardProps) {
      setSelectedItem(itemData);
      setClientInforModalOpen(true)
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
          dataNascimento: result.dataNascimento,
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
                renderItem={({ item }: { item: DataListProps }) => <ClientCard data={item} onPress={handleClientCardClick}
                />}
                />
            </ClientCards>
            <StatusBar style="auto" />
            <FabButton onPress={handleCloseClientRegisterModal}/>
            <Modal visible={clientRegisterModalOpen}>
                <ClientRegister closeClientRegister={handleOpenClientRegisterModal}/>
            </Modal>

            <Modal visible={clientInforModalOpen}>
                <InforClient data={selectedItem} closeClientInfor={handleOpenClientInforModal} />
            </Modal>
        </Container>
    )
}