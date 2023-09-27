import React from "react";
import { StyleSheet } from "react-native";

import { 
    Container,
    Header,
    Name,
    Content,
    CPFClient,
    CPFDescription,
    CPFValue,
    Email,
    EmailDescription,
    EmailValue,
    Footer,
    DebtDescription,
    DebtValue
 } from "./styles";

 export interface ClientCardProps {
    id: string;
    name: string;
    cpf: string;
    email: string;
    dataNascimento: string,
    debt: string
 }

 interface Props {
    data: ClientCardProps,
    onPress: (data: ClientCardProps) => void;
 }

export function ClientCard({
    data,
    onPress
}: Props){
    return (
        <Container style={[styles.elevation]} onPress={() => onPress(data)}>
            <Header>
                <Name>{data.name}</Name>
            </Header>

            <Content>
                <CPFClient>
                    <CPFDescription>CPF: </CPFDescription>
                    <CPFValue>{data.cpf}</CPFValue>
                </CPFClient>
                <Email>
                    <EmailDescription>E-mail:</EmailDescription>
                    <EmailValue>{data.email}</EmailValue>
                </Email>
            </Content>
            <Footer>
                <DebtDescription>Valor da dívida:</DebtDescription>
                <DebtValue>R$ {data.debt}</DebtValue>
            </Footer>
        </Container>
    )
};

// foi utilizada a propriedade elevation de StyleSheet uma vez que não consegui 
// algo semelhante com o styled-components e optei por nao fazer uso de uma outra biblioteca
const styles = StyleSheet.create({
    elevation: {
        elevation: 2,
    },
  });
  