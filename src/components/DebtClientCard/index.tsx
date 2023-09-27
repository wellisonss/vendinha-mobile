import React from "react";
import { Alert, StyleSheet } from "react-native";
import { ButtonPay } from "../Form/ButtonPay"

import { 
    Container,
    Content,
    Amount,
    Total,
    HeaderLabel,
    TotalDescription,
    TotalValue,
    IconCheck
 } from "./styles";
import { api } from "../../libs/axios";

 export interface DebtClientCardProps {
    id: string;
    valor: string;
    index: number;
    dataPagamento: string
 }

 interface Props {
    data: DebtClientCardProps
 }

export function DebtClientCard({
    data
}: Props){



    async function handlePayRegister(){

        try {

            await api.put('/api/Divida', {
                dividaId: data.id
            });

            Alert.alert('Pagamento', 'Dívida paga com sucesso');
            
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Erro ao realizar pagamento');
        }
        
    }


    return (
        <Container style={[styles.elevation]}>
            <Content>
                <Amount>
                    <HeaderLabel>Dívida {data.index + 1}</HeaderLabel>
                    {data.dataPagamento ? (
                        <IconCheck name='check'/>
                    ) : (
                        <ButtonPay title='pagar' onPress={handlePayRegister}/> // Mostra o ícone "search" quando dataPagamento for nulo
                    )}
                    
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
  