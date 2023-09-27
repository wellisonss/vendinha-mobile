import React from "react";
import { StyleSheet } from "react-native";

import { 
    Container,
    Header,
    Title,
    Content,
    Amount,
    Total,
    AmountDescription,
    AmountValue,
    TotalDescription,
    TotalValue
 } from "./styles";

 interface Data {
    title: string;
    amount: string;
    total: string;
 }

 interface Props {
    data: Data
 }

export function DebtsCard({
    data
}: Props){
    return (
        <Container style={[styles.elevation]}>
            <Header>
                <Title>{data.title}</Title>
            </Header>

            <Content>
                <Amount>
                    <AmountDescription>Qtde:</AmountDescription>
                    <AmountValue>{data.amount}</AmountValue>
                </Amount>
                <Total>
                    <TotalDescription>Valor total:</TotalDescription>
                    <TotalValue>R$ {data.total}</TotalValue>
                </Total>
            </Content>
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
  