import React from "react";

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
        <Container>
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
}