import React from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { InputForm } from "../../components/Form/InputForm";

import { api } from '../../libs/axios'

import { Button } from "../../components/Form/Button";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields } from './styles'

interface Props {
    clienteId: string | undefined,
    closeDebtRegister: () => void,
}

const schema = Yup.object().shape({
    descricao: Yup.string().required('Descrição é obrigatório'),
    valor: Yup.string().required('CPF é obrigatório'),
    dataPagamento: Yup.string(), // campo nao obrigatorio
})

export function DebtsRegister({ closeDebtRegister, clienteId }: Props){

    console.log("clienteId", clienteId);

    const {
        control,
        handleSubmit,
        getValues,
        setValue,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleRegister(){

        try {
            // getValues obtem os valores do formulário
            const formValues = getValues();
            // Verifique se 'dataNascimento' está presente nos formValues
            if (formValues.dataPagamento) {
                // Separa a data em partes dia, mês e ano
                const parts = formValues.dataPagamento.split('/');
                
                // verifica se que existem três elementos separados por "/"
                if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10);
                const year = parseInt(parts[2], 10);
                
                // Verifica se os valores são numéricos válidos
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    // Cria uma data no formato ISO que é passado pela documentação da API
                    formValues.dataPagamento = new Date(year, month - 1, day).toISOString();
                }
                }
            }

            await api.post('/api/Divida', {
                descricao: formValues.descricao,
                valor: formValues.valor,
                dataPagamento: formValues.dataPagamento,
                clienteId: clienteId 
            });



            reset();

            Alert.alert('Nova Dívida', 'Dívida cadastrado com sucesso');
            
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Dívida não cadastrada');
        }
        
    }

    // Função para aplicar a máscara no campo de dataPagamento
    const applyPagamentoFormat = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Nova dívida</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="descricao" 
                            control={control}
                            placeholder="descrição"
                            autoCapitalize="words"
                            autoCorrect={false}
                            error={errors.descricao?.message} 

                        />
                        <RowContainer>
                           <ColunmContainer>
                                <InputForm
                                    name="dataPagamento" 
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const formattedValue = applyPagamentoFormat(text);
                                        setValue("dataPagamento", formattedValue);
                                    }}
                                    maxLength={10} // Nascimento tem 10 caracteres com a máscara
                                    error={errors.dataPagamento?.message} 
                                />
                            </ColunmContainer>
                            <ColunmContainer>
                                <InputForm
                                    name="valor" 
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    error={errors.valor?.message}
                                />
                            </ColunmContainer>
                        </RowContainer>
                    </Fields>
                    <RowContainer>
                        <ColunmContainer>
                            <Button title="Cancelar" type="cancel" onPress={closeDebtRegister}/>
                        </ColunmContainer>
                        <ColunmContainer>
                            <Button
                                title="Salvar"
                                type="save"
                                onPress={handleSubmit(handleRegister)}
                            />
                        </ColunmContainer>
                    </RowContainer>
                </Form>
            </Container>
        </TouchableWithoutFeedback>
    );
}
