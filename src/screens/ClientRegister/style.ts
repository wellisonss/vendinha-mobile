import styled, { DefaultTheme } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
`;

export const Header = styled.View`
background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background}; 
height: ${RFPercentage(10)}px;

align-items: center;
justify-content: flex-end;
padding-bottom: 16px;
`;

export const Title = styled.Text`
color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
font-size: ${RFValue(18)}px;
font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.bold};
`;

export const Form = styled.View`
flex: 1;
padding: 16px;
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
