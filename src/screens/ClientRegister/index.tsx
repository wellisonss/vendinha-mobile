import React from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useForm } from 'react-hook-form'
import { Input } from "../../components/Form/Input";
import { InputForm } from "../../components/Form/InputForm";

import { Button } from "../../components/Form/Button";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

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
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleRegister(){
        // getValues obtem os valores do formulário
        const formValues = getValues();
        console.log(formValues);
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
                            name="nome" // Deixe como "nome"
                            control={control}
                            placeholder="Nome do cliente"
                            autoCapitalize="words"
                            autoCorrect={false}
                            error={errors.nome?.message} // Adicione o erro correspondente

                        />
                        <RowContainer>
                            <ColunmContainer>
                                <InputForm
                                    name="cpf" // Deixe como "cpf"
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const formattedValue = applyCPFFormat(text);
                                        setValue("cpf", formattedValue);
                                    }}
                                    maxLength={14} // CPF tem 14 caracteres com a máscara
                                    error={errors.cpf?.message} // Adicione o erro correspondente
                                />
                            </ColunmContainer>
                            <ColunmContainer>
                                <InputForm
                                    name="nascimento" // Deixe como "nascimento"
                                    control={control}
                                    placeholder="Somente números"
                                    keyboardType="numeric"
                                    onChangeText={(text) => {
                                        const formattedValue = applyNascimentoFormat(text);
                                        setValue("nascimento", formattedValue);
                                    }}
                                    maxLength={10} // Nascimento tem 10 caracteres com a máscara
                                    error={errors.nascimento?.message} // Adicione o erro correspondente
                                />
                            </ColunmContainer>
                        </RowContainer>
                        <InputForm
                            name="email" // Deixe como "email"
                            control={control}
                            placeholder="Email do cliente"
                            autoCapitalize="none"
                            error={errors.email?.message} // Adicione o erro correspondente
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
