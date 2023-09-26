import styled, { DefaultTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.card}; 
border-radius: 10px; 
padding: 20px;
margin-bottom: 20px;
border-color: rgba(221, 221, 221, 0.4);
border-bottom-width: 3px;
`
export const Header = styled.View`
margin-bottom: ${RFValue(10)}px;;
`
export const Name = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`
export const Content = styled.View`
`
export const CPFClient = styled.View`
flex-direction: row;
justify-content: start;
margin-bottom: ${RFValue(10)}px;
`
export const Email = styled.View`
flex-direction: row;
justify-content: start;
`

export const Footer = styled.View`
flex-direction: row;
justify-content: space-between;
border-top-width: 1px;
margin-top: ${RFValue(10)}px;
padding-top: ${RFValue(5)}px;
border-top-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.divider};;
`
export const CPFDescription = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
    margin-right: ${RFValue(10)}px;
`
export const CPFValue = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary_text};
`
export const EmailDescription = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
    margin-right: ${RFValue(10)}px;
`
export const EmailValue = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary_text};
`

export const DebtDescription = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`

export const DebtValue = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
`
