import React from "react";

import { Input } from "../../components/Form/Input";

import { Container, Header, Title, Form, RowContainer, ColunmContainer } from './style'

export function ClientRegister(){
    return (
        <Container>
            <Header>
                <Title>Cliente</Title>
            </Header>

            <Form>
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
            </Form>
  
        </Container>
    );
}