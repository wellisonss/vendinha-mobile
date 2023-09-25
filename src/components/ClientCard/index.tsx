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

 interface Data {
    name: string;
    cpf: string;
    email: string;
    debt: string
 }

 interface Props {
    data: Data
 }

export function ClientCard({
    data
}: Props){
    return (
        <Container style={[styles.elevation]}>
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
                <DebtValue>{data.debt}</DebtValue>
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
  