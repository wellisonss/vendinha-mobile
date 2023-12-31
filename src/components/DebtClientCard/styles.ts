import styled, { DefaultTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

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
export const HeaderLabel = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`
export const HeaderButton = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.regular};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`
export const TotalDescription = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary_text};
`
export const TotalValue = styled.Text`
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.medium};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary_text};
`

export const IconCheck = styled(Feather)`
font-size: ${RFValue(16)}px;
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secundary};
`