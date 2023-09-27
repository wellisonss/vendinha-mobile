import React, { useState, useEffect } from "react";
import { DebtClientCardProps, DebtClientCard } from "../../components/DebtClientCard";
import { ClientCardProps } from "../../components/ClientCard";

import { Button } from "../../components/Form/Button";

import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields, TextLabel, TextValue, DebtsClientCardsList, ClientCards } from './styles'
import { useFetch } from "../../hooks/useFetch";

export interface DataListProps extends DebtClientCardProps {
  id: string;
  cliente: Cliente
}

interface Cliente {
  id: string
}

interface Props {
  data: ClientCardProps | null,
  closeClientInfor: () => void
}

export function InforClient({ closeClientInfor, data }: Props) {

  const { data: exampleDebts, isFetching: isFetchingDebts } = useFetch<DataListProps[]>('api/Divida/GetOData?%24count=true');
  const [filteredDebts, setFilteredDebts] = useState<{ id: string; valor: number }[]>([]);

  console.log("exampleDebts", exampleDebts);

  useEffect(() => {
    if (exampleDebts !== null) {
      const newFilteredDebts = exampleDebts
        .filter((debt) => debt.cliente.id == data?.id)
        .map((debt, index) => ({
          id: debt.id,
          valor: typeof debt.valor === 'number' ? debt.valor : parseFloat(debt.valor),
          index: index
        })); // Converter valor para número se for uma string

         // Ordenar por id do maior para o menor
      newFilteredDebts.sort((a, b) => parseInt(b.id) - parseInt(a.id));

      setFilteredDebts(newFilteredDebts);
    }
  }, [exampleDebts]);

  return (
    <Container>
                <Header>
                    <Title>Cliente</Title>
                </Header>

                <Form>
                    <Fields>
                        <TextLabel>Nome</TextLabel>
                        <TextValue>{data?.id}</TextValue>
                        <RowContainer>
                            <ColunmContainer>
                              <TextLabel>CPF</TextLabel>
                              <TextValue>{data?.cpf}</TextValue>
                            </ColunmContainer>
                            <ColunmContainer>
                              <TextLabel>Nascimento</TextLabel>
                              <TextValue>{data?.dataNascimento}</TextValue>
                            </ColunmContainer>
                        </RowContainer>
                          <TextLabel>Email</TextLabel>
                          <TextValue>{data?.email}</TextValue>
                    </Fields>


                    <ClientCards>
                      <DebtsClientCardsList 
                        data={filteredDebts}
                        keyExtractor={(item: DataListProps) => item.id}
                        renderItem={({ item }: { item: DataListProps }) => (
                          <DebtClientCard data={item} />
                        )}
                      />
                    </ClientCards>

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
            </Container>
  );
}
