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

export function DebtsCard(){
    return (
        <Container style={[styles.elevation]}>
            <Header>
                <Title>Dividas em aberto</Title>
            </Header>

            <Content>
                <Amount>
                    <AmountDescription>Qtde:</AmountDescription>
                    <AmountValue>32</AmountValue>
                </Amount>
                <Total>
                    <TotalDescription>Valor total:</TotalDescription>
                    <TotalValue>R$ 43.243,09</TotalValue>
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
  