import styled, { DefaultTheme } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.card}; 
border-radius: 10px; 
padding: 20px;
margin: 10px;
`
export const Header = styled.View`
margin-bottom: ${RFValue(10)}px;;
`
export const Title = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`
export const Content = styled.View`
`
export const Amount = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: ${RFValue(10)}px;;

`
export const Total = styled.View`
flex-direction: row;
justify-content: space-between;
`
export const AmountDescription = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
`
export const AmountValue = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary_text};
`
export const TotalDescription = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
`
export const TotalValue = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary_text};
`