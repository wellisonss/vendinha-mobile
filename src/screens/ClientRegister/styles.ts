import styled, { DefaultTheme } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
flex: 1;
padding: 0 16px;
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(8)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 16px;

    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
`;

export const Title = styled.Text`
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
font-size: ${RFValue(20)}px;
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
`;

export const Form = styled.View`
flex: 1;
padding-bottom: 18px;
justify-content: space-between;
`;

export const ColunmContainer = styled.View`
width: 48%;
`;

export const RowContainer = styled.View`
flex-direction: row; 
justify-content: space-between;
`;


export const Fields = styled.View`
`;
