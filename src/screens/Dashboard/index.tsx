import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container, Title } from './styles'

export function Dashboard(){
    return (
        <Container>
            <Title>Dashboard</Title>
            <StatusBar style="auto" />
        </Container>
    )
}