import React from "react";
import { StyleSheet } from "react-native";

import { 
    Container,
    Content,
    Amount,
    Total,
    HeaderLabel,
    HeaderButton,
    TotalDescription,
    TotalValue,
    Icon
 } from "./styles";

 export interface DebtClientCardProps {
    valor: string;
    index: number;
 }

 interface Props {
    data: DebtClientCardProps
 }

export function DebtClientCard({
    data
}: Props){
    return (
        <Container style={[styles.elevation]}>
            <Content>
                <Amount>
                    <HeaderLabel>Dívida {data.index + 1}</HeaderLabel>
                    
                    <Icon name='check'/>
                   
                </Amount>
                <Total>
                    <TotalDescription>Valor da dívida</TotalDescription>
                    <TotalValue>R$ {data.valor}</TotalValue>
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
  