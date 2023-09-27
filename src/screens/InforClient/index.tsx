import React from "react";
import { ClientCardProps } from "../../components/ClientCard";
import { Button } from "../../components/Form/Button";

import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields, TextLabel, TextValue } from './styles'


interface Props {
  data: ClientCardProps | null,
  closeClientInfor: () => void
}

export function InforClient({ closeClientInfor, data }: Props) {

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
                              <TextValue>{data?.dataNascimento}</TextValue>
                            </ColunmContainer>
                        </RowContainer>
                          <TextLabel>Email</TextLabel>
                          <TextValue>{data?.email}</TextValue>
                    </Fields>
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
