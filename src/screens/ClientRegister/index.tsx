import React from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { InputForm } from "../../components/Form/InputForm";

import { api } from '../../libs/axios'

import { Button } from "../../components/Form/Button";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields } from './style'

interface Props {
    closeClientRegister: () => void
}

interface FormData  {
    cpf: string,
    email: string,
    nascimento: string,
    nome: string
}

const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().required('Email é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório'),
    nascimento: Yup.string().required('Nascimento é obrigatório'),
})

export function ClientRegister({ closeClientRegister }: Props){

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
            if (formValues.nascimento) {
                // Separa a data em partes dia, mês e ano
                const parts = formValues.nascimento.split('/');
                
                // verifica se que existem três elementos separados por "/"
                if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10);
                const year = parseInt(parts[2], 10);
                
                // Verifica se os valores são numéricos válidos
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    // Cria uma data no formato ISO que é passado pela documentação da API
                    formValues.nascimento = new Date(year, month - 1, day).toISOString();
                }
                }
            }

            // Remove caracteres não numéricos do CPF
            formValues.cpf = formValues.cpf.replace(/\D/g, '');

            await api.post('/api/Cliente', {
                nome: formValues.nome,
                cpf: formValues.cpf,
                email: formValues.email,
                dataNascimento: formValues.nascimento
            });

            reset();

            Alert.alert('Novo cliente', 'Cliente cadastrado com sucesso');
            
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Cliente não cadastrado');
        }
        
    }

    // Função para aplicar a máscara no campo de CPF
    const applyCPFFormat = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };

    // Função para aplicar a máscara no campo de Nascimento
    const applyNascimentoFormat = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cliente</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="nome" 
                            control={control}
                            placeholder="Nome do cliente"
                            autoCapitalize="words"
                            autoCorrect={false}
                            error={errors.nome?.message} 

                        />
                        <RowContainer>
                            <ColunmContainer>
                                <InputForm
                                    name="cpf" 
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const formattedValue = applyCPFFormat(text);
                                        setValue("cpf", formattedValue);
                                    }}
                                    maxLength={14} 
                                    error={errors.cpf?.message}
                                />
                            </ColunmContainer>
                            <ColunmContainer>
                                <InputForm
                                    name="nascimento" 
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const formattedValue = applyNascimentoFormat(text);
                                        setValue("nascimento", formattedValue);
                                    }}
                                    maxLength={10} // Nascimento tem 10 caracteres com a máscara
                                    error={errors.nascimento?.message} 
                                />
                            </ColunmContainer>
                        </RowContainer>
                        <InputForm
                            name="email"
                            control={control}
                            placeholder="Email do cliente"
                            autoCapitalize="none"
                            error={errors.email?.message}
                        />
                    </Fields>
                    <RowContainer>
                        <ColunmContainer>
                            <Button title="Cancelar" type="cancel" onPress={closeClientRegister}/>
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
