import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles'

export function Dashboard(){
    return (
        <Container>
            <StatusBar style="auto" />
        </Container>
    )
}