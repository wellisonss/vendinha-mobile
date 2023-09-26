import React from "react";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";


import { Container, Header, Title, Form, RowContainer, ColunmContainer, Fields } from './style'

export function ClientRegister(){
    return (
        <Container>
            <Header>
                <Title>Cliente</Title>
            </Header>

            <Form>
                <Fields>
                    <Input 
                        name="Nome"
                        placeholder="nome"
                    />
                    <RowContainer>
                        <ColunmContainer>
                            <Input 
                                name="CPF"
                                placeholder="cpf"
                            />
                        </ColunmContainer>
                        <ColunmContainer>
                            <Input 
                                name="Nascimento"
                                placeholder="nascimento"
                            />
                        </ColunmContainer>
                    </RowContainer>
                    <Input 
                        name="Email"
                        placeholder="email"
                    />
                </Fields>
                <RowContainer>
                    <ColunmContainer>
                        <Button title="Cancelar" type="cancel"/>
                    </ColunmContainer>
                    <ColunmContainer>
                        <Button title="Salvar" type="save"/>
                    </ColunmContainer>
                </RowContainer>
            </Form>  
        </Container>
    );
}