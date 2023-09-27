import React, { useState, useEffect } from "react";
import { DebtClientCardProps, DebtClientCard } from "../../components/DebtClientCard";
import { ClientCardProps } from "../../components/ClientCard";
import { Modal } from 'react-native';
import { DebtsRegister } from '../DebtsRegister'
import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields, TextLabel, TextValue, DebtsClientCardsList, ClientCards, ButtonReload, HeaderDebt, ContainerReload } from './styles'
import { useFetch } from "../../hooks/useFetch";
import { FabButton } from "../../components/Form/FabButton";
import { Button } from "../../components/Form/Button";

export interface DataListProps extends DebtClientCardProps {
  id: string;
  cliente: Cliente;
  dataPagamento: string
}

interface Cliente {
  id: string
}

interface Props {
  data: ClientCardProps | null,
  closeClientInfor: () => void,
}

// Função personalizada que encapsula a lógica
function useClientDebts(data: ClientCardProps | null) {
  const [filteredDebts, setFilteredDebts] = useState<{ id: string; valor: number }[]>([]);
  const { data: clientsDebts, isFetching: isFetchingDebts } = useFetch<DataListProps[]>('api/Divida/GetOData?%24count=true');

  useEffect(() => {
    if (clientsDebts !== null) {
      const newFilteredDebts = clientsDebts
        .filter((debt) => debt.cliente.id == data?.id)
        .map((debt, index) => ({
          id: debt.id,
          valor: typeof debt.valor === 'number' ? debt.valor : parseFloat(debt.valor),
          dataPagamento: debt.dataPagamento,
          index: index
        }));

      newFilteredDebts.sort((a, b) => parseInt(b.id) - parseInt(a.id));

      console.log(newFilteredDebts);

      setFilteredDebts(newFilteredDebts);
    }
  }, [clientsDebts, data]);

  return {
    filteredDebts,
    isFetchingDebts,
  };
}

export function InforClient({ closeClientInfor, data }: Props) {
  const { filteredDebts, isFetchingDebts } = useClientDebts(data);
  const [debtRegisterModalOpen, setDebtRegisterModalOpen] = useState(false);

  function handleOpenDebtRegisterModal() {
    setDebtRegisterModalOpen(false);
  }

  function handleCloseDebtRegisterModal() {
    setDebtRegisterModalOpen(true);
  }

  const handleReloadData = () => {
    useClientDebts(data);
  };


  return (
    <Container>
                <Header>
                    <Title>Cliente</Title>
                </Header>

                <Form>
                    <Fields>
                        <TextLabel>Nome</TextLabel>
                        <TextValue>{data?.name}</TextValue>
                        <RowContainer>
                            <ColunmContainer>
                              <TextLabel>CPF</TextLabel>
                              <TextValue>{data?.cpf}</TextValue>
                            </ColunmContainer>
                            <ColunmContainer>
                              <TextLabel>Nascimento</TextLabel>
                              <TextValue>{data?.dataNascimento.split('T')[0]}</TextValue>
                            </ColunmContainer>
                        </RowContainer>
                          <TextLabel>Email</TextLabel>
                          <TextValue>{data?.email}</TextValue>
                    </Fields>

                    <RowContainer>
                      <HeaderDebt>Dívidas</HeaderDebt>
                      <ContainerReload onPress={()=> {console.log("chamar função handleReloadData")}}>
                        <ButtonReload name='refresh-ccw'/>
                      </ContainerReload>
                    </RowContainer>


                    <ClientCards>
                      <DebtsClientCardsList 
                        data={filteredDebts}
                        keyExtractor={(item: DataListProps) => item.id}
                        renderItem={({ item }: { item: DataListProps }) => (
                          <DebtClientCard data={item} />
                        )}
                      />
                    </ClientCards>

                    <FabButton onPress={handleCloseDebtRegisterModal}/>

                    <RowContainer>
                        <ColunmContainer>
                            <Button title="Cancelar" type="cancel" onPress={closeClientInfor}/>
                        </ColunmContainer>
                        <ColunmContainer>
                            <Button
                                title="Salvar"
                                type="save"
                            />
                        </ColunmContainer>
                    </RowContainer>
                </Form>
                <Modal visible={debtRegisterModalOpen}>
                <DebtsRegister clienteId={data?.id} closeDebtRegister={handleOpenDebtRegisterModal} />
                </Modal>
            </Container>
  );
}
